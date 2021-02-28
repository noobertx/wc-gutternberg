<?php



class WPRIG_Woocommerce_Blocks {


	protected $api_base_url = 'https://wprig.io/wp-json/restapi/v2/';
	protected $wprig_api_request_body;
	protected $wprig_api_request_body_default;

	protected $option_keyword = 'wprig_global_options';

    public function get_slug() : string {
		return 'wprig_wc_custom_blocks';
    }


	/**
	 * wprig constructor
	 */
	public function __construct() {

		add_action( 'rest_api_init', array( $this,'wprig_register_route' ));

		$this->wprig_api_request_body_default = array(
		'request_from' => 'wprig',
			// 'request_microtime()'  => microtime(),
		);
		$this->wprig_api_request_body = apply_filters( 'wprig_api_request_body', array() );

		 // Editor Load
		add_action( 'enqueue_block_editor_assets', array( $this, 'wprig_editor_assets' ) );

		 // Editor Load
		add_action( 'admin_enqueue_scripts', array( $this, 'wprig_admin_assets' ) );

		 // Block Categories
		add_filter( 'block_categories', array( $this, 'wprig_block_categories' ), 1, 2 );

		 // Add Styles and Scripts
		add_action( 'wp_enqueue_scripts', array( $this, 'wprig_enqueue_style' ) );

		add_action( 'wp_enqueue_scripts', array( $this, 'wprig_enqueue_scripts' ) );

		 // Load Inline Scripts
		add_action( 'admin_head', array( $this, 'wprig_inline_admin_header_scripts' ), 0 );
		add_action( 'wp_footer', array( $this, 'wprig_inline_footer_scripts' ) );

		 // Add post meta key
		$this->add_global_settings_post_meta();

		 // Common style

		$this->enqueue_block_css();

		add_action( 'rest_api_init', array( $this, 'register_api_hook' ) );
		add_action( 'delete_post', array( $this, 'before_delete_post' ), 10 );

		 // Get layout and block from Server and Cache
		add_action( 'wp_ajax_wprig_get_sections', array( $this, 'wprig_get_sections' ) );
		add_action( 'wp_ajax_wprig_get_layouts', array( $this, 'wprig_get_layouts' ) );

		add_action( 'wp_ajax_wprig_get_single_layout', array( $this, 'wprig_get_single_layout' ) );
		add_action( 'wp_ajax_wprig_get_single_block', array( $this, 'wprig_get_single_section' ) );

		add_action( 'wp_ajax_wprig_get_saved_block', array( $this, 'wprig_get_saved_block' ) );
		add_action( 'wp_ajax_wprig_delete_saved_block', array( $this, 'wprig_delete_saved_block' ) );

		add_action( 'wp_ajax_wprig_send_form_data', array( $this, 'wprig_send_form_data' ) );
		add_action( 'wp_ajax_nopriv_wprig_send_form_data', array( $this, 'wprig_send_form_data' ) );

		 // dynamic blocks
		add_action( 'init', array( $this, 'init_dynamic_blocks' ) );

		 // wprig admin class
		add_filter( 'admin_body_class', array( $this, 'wprig_editor_bodyclass' ) );

		add_filter( 'body_class', array( $this, 'add_custom_class' ) );

		 // wprig global container width
		add_action( 'wp_enqueue_scripts', array( $this, 'wprig_global_container_width' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'wprig_global_container_width' ) );

		add_action( 'wprig_active_theme_preset', array( $this, 'active_theme_preset' ) );


		// add_action( 'wp_body_open', array( $this,'custom_body_open_code' ));
		

	}



	public function product_categories(){
		register_rest_route( 'wprig/products', 'categories', array(
			'methods' => WP_REST_SERVER::READABLE,
			'callback' => array($this, 'fetchProductCategories')
			)
		);
	}
	public function fetchProductCategories(){
		$taxonomy     = 'product_cat';
		$orderby      = 'name';  
		$show_count   = 0;      // 1 for yes, 0 for no
		$pad_counts   = 0;      // 1 for yes, 0 for no
		$hierarchical = 1;      // 1 for yes, 0 for no  
		$title        = '';  
		$empty        = 0;
		$terms_collected = [];
	  
		$args = array(
			   'taxonomy'     => $taxonomy,
			   'orderby'      => $orderby,
			   'show_count'   => $show_count,
			   'pad_counts'   => $pad_counts,
			   'hierarchical' => $hierarchical,
			   'title_li'     => $title,
			   'hide_empty'   => $empty
		);
	   $all_categories = get_categories( $args );
	   foreach ($all_categories as $cat) {
		  if($cat->category_parent == 0) {
			  $category_id = $cat->term_id;   
				$terms_collected[] = [
					'term_id' => $cat->term_id,
					'label'	=> $cat->name,
					'value'	=> $cat->slug,			

				];
			  $args2 = array(
					  'taxonomy'     => $taxonomy,
					  'child_of'     => 0,
					  'parent'       => $category_id,
					  'orderby'      => $orderby,
					  'show_count'   => $show_count,
					  'pad_counts'   => $pad_counts,
					  'hierarchical' => $hierarchical,
					  'title_li'     => $title,
					  'hide_empty'   => $empty
			  );
			  $sub_cats = get_categories( $args2 );
			  if($sub_cats) {
				  foreach($sub_cats as $sub_category) {

					$terms_collected[] = [
						'term_id' => $sub_category->term_id,
						'label'	=> $sub_category->name,
						'value'	=> $sub_category->slug,				
	
					];

				  }   
			  }
		  }       
	  }
	  return $terms_collected;
	}
	
	

	public function custom_body_open_code( ) { ?>
		<div class="modal-item-sample"></div>
	<?php }

	public function wprig_blocks_add_orderby( $params ) {

		$params['orderby']['enum'][] = 'rand';
		$params['orderby']['enum'][] = 'menu_order';
	
		return $params;
	}	
	public function wprig_get_product_info($object){
		// if(!function_exists('wc_get_product')) return [];
		return array(
			'sku' => wc_get_product($object['id'])->get_sku(),
			'get_regular_price' => wc_get_product($object['id'])->get_regular_price(),
			'get_sale_price' => wc_get_product($object['id'])->get_sale_price(),
			'get_price' => wc_get_product($object['id'])->get_price(),
			'onSale' => wc_get_product($object['id'])->is_on_sale()
		);
	}
	public function wprig_get_featured_image_url($object){
		$featured_images = array();
	if (!isset($object['featured_media'])) {
		return $featured_images;
	} else {
		$image = wp_get_attachment_image_src($object['featured_media'], 'full', false);
		if (is_array($image)) {
			$featured_images['full'] = $image;
			$featured_images['landscape'] = wp_get_attachment_image_src($object['featured_media'], 'wprig_landscape', false);
			$featured_images['portraits'] = wp_get_attachment_image_src($object['featured_media'], 'wprig_portrait', false);
			$featured_images['thumbnail'] =  wp_get_attachment_image_src($object['featured_media'], 'wprig_thumbnail', false);
	
			$image_sizes = $this->get_all_image_sizes();
			foreach ($image_sizes as $key => $value) {
				$size = $value['value'];
				$featured_images[$size] = wp_get_attachment_image_src(
					$object['featured_media'],
					$size,
					false
				);
			}
			return $featured_images;
		}
	}
	}

	function wprig_get_comment_info($object){
    $comments_count = wp_count_comments($object['id']);
    return $comments_count->total_comments;
}



	public function wprig_register_route(){
		register_rest_route( 'wprig', 'posts', array(
                'methods' => \WP_REST_Server::READABLE,
                'args' => array('post_type' => [], 'taxonomy' => [], 'include' => [], 'exclude' => [], 'order' => [], 'orderby' => [], 'count' => [], 'size' => [], 'tag' => [], 'cat' => [], 'meta_key' => [], 'status' => [], 'wpnonce' => []),
                'callback' => array($this, 'wprig_route_post_data'),
                'permission_callback' => '__return_true'
            )
        );
	}

	public function wprig_route_post_data($prams,$local=false) {
        if (!wp_verify_nonce($_REQUEST['wpnonce'], 'wopb-nonce') && $local){
            return ;
        }

        // Query Builder
        $args = array(
            'post_type'     => 'product',
            'orderby'       => 'date',
            'post_status'   => 'publish',
            'order'         => 'DESC',
        );

        if(isset($prams['count'])){ $args['posts_per_page'] = esc_attr($prams['count']); }
        // if(isset($prams['post_type'])){ $args['post_type'] = esc_attr( $prams['post_type'] ); }

        if(isset($prams['taxonomy'])){ // taxonomy  slug__val__slug__val
            $tax_arr = array('relation' => 'OR');
            $tax = explode('__', esc_attr($prams['taxonomy']));
            if(!empty($tax)){
                for($i=0; $i < count($tax) ; $i++){
                    if($i%2 == 0){
                        $tax_arr[] = array('taxonomy'=>$tax[$i], 'field' => 'slug', 'terms' => array($tax[$i+1]));
                    }
                }
            }
            if(!empty($tax_arr)){
                $args['tax_query'] = $tax_arr;
            }
        }

        if(isset($prams['include'])){ $args['post__in'] = explode('__', esc_attr($prams['include'])); }
        if(isset($prams['exclude'])){ $args['post__not_in'] = explode('__', esc_attr($prams['exclude'])); }
        if(isset($prams['orderby'])){ $args['orderby'] = esc_attr($prams['orderby']); }
        if(isset($prams['order'])){ $args['order'] = $prams['order']; }
        if(isset($prams['offset'])){ $args['offset'] = esc_attr($prams['offset']); }
        if(isset($prams['paged'])){ $args['paged'] = esc_attr($prams['paged']); }
        if(isset($prams['meta_key'])){ $args['meta_key'] = esc_attr($prams['meta_key']); }


        if ( isset($prams['queryOrderBy']) ) {
            switch ($prams['queryOrderBy']) {
                case 'new_old':
                    $args['order'] = 'DESC';
                    unset($args['orderby']);
                    break;

                case 'title':
                    $args['orderby'] = 'title';
                    $args['order'] = 'ASC';
                    break;

                case 'title_reversed':
                    $args['orderby'] = 'title';
                    $args['order'] = 'DESC';
                    break;

                case 'price_low':
                    $args['meta_key'] = '_price';
                    $args['orderby'] = 'meta_value_num';
                    $args['order'] = 'ASC';
                    break;

                case 'price_high':
                    $args['meta_key'] = '_price';
                    $args['orderby'] = 'meta_value_num';
                    $args['order'] = 'DESC';
                    break;            

                case 'popular':
                    $args['meta_key'] = 'total_sales';
                    $args['orderby'] = 'meta_value_num';
                    $args['order'] = 'DESC';
                    break;

                case 'popular_view':
                    $args['meta_key'] = '__post_views_count';
                    $args['orderby'] = 'meta_value_num';
                    $args['order'] = 'DESC';
                    break;

                case 'date':
                    unset($args['orderby']);
                    $query_args['order'] = 'DESC';
                    break;
                
                default:
                    break;
            }
        }

        if ( isset($prams['status']) ) {
            switch ($prams['status']) {
                case 'featured':
                    if( isset($args['post__in']) ) {
                        $args['post__in'] = array_merge( $args['post__in'], wc_get_featured_product_ids() );
                    } else {
                        $args['post__in'] = wc_get_featured_product_ids();
                    }
                    break;

                case 'onsale':
                    unset($args['meta_key']);
                    $args['orderby'] = 'date';
                    $args['order'] = 'DESC';
                    $args['meta_query'] = array(
                        'relation' => 'AND',
                        array(
                            'key'           => '_sale_price',
                            'value'         => 0,
                            'compare'       => '>',
                            'type'          => 'numeric'
                        ),
                        array(
                            'key'           => '_regular_price',
                            'value'         => 0,
                            'compare'       => '>',
                            'type'          => 'numeric'
                        )
                    );
                    break;
        
                default:
                    break;
            }
        }
        
        $data = [];
        $loop = new \WP_Query($args);

        if($loop->have_posts()){
            while($loop->have_posts()) {
                $loop->the_post(); 
                $var                = array();
                $post_id            = get_the_ID();
                $product            = wc_get_product($post_id);
                $user_id            = get_the_author_meta('ID');
                $var['title']       = get_the_title();
                $var['permalink']   = get_permalink();
                $var['excerpt']     = strip_tags(get_the_content());
                $var['excerpt_full']= strip_tags(get_the_excerpt());
                $var['time']        = get_the_date();
                $var['price_sale']  = $product->get_sale_price();
                $var['price_regular']= $product->get_regular_price();
                $var['discount']= ($var['price_sale'] && $var['price_regular']) ? round( ( $var['price_regular'] - $var['price_sale'] ) / $var['price_regular'] * 100 ).'%' : '';
                $var['price_html']  = $product->get_price_html();
                $var['stock']       = $product->get_stock_status();
                $var['rating_count']= $product->get_rating_count();
                $var['rating_average']= $product->get_average_rating();
                
                // image
                if( has_post_thumbnail() ){
                    $thumb_id = get_post_thumbnail_id($post_id);
                    $image_sizes = $this->get_all_image_sizes();
                    $image_src = array();
                    foreach ($image_sizes as $key => $value) {
                        $image_src[$key] = wp_get_attachment_image_src($thumb_id, $key, false)[0];
                    }
                    $var['image'] = $image_src;
                }

                // tag
                $tag = get_the_terms($post_id, (isset($prams['tag'])?esc_attr($prams['tag']):'product_tag'));
                if(!empty($tag)){
                    $v = array();
                    foreach ($tag as $val) {
                        $v[] = array('slug' => $val->slug, 'name' => $val->name, 'url' => get_term_link($val->term_id));
                    }
                    $var['tag'] = $v;
                }

                // cat
                $cat = get_the_terms($post_id, (isset($prams['cat'])?esc_attr($prams['cat']):'product_cat'));
                if(!empty($cat)){
                    $v = array();
                    foreach ($cat as $val) {
                        $v[] = array('slug' => $val->slug, 'name' => $val->name, 'url' => get_term_link($val->term_id));
                    }
                    $var['category'] = $v;
                }
                $data[] = $var;
            }
            wp_reset_postdata();
        }

    return rest_ensure_response( $data );
    }
	/**
	 * Theme preset activation hook
	 */
	public function active_theme_preset() {
		$settings               = json_decode( get_option( $this->option_keyword ) );
		$settings->activePreset = 'theme';
		$settings               = json_encode( $settings );
		update_option( $this->option_keyword, $settings );
	}

	function wprig_get_author_info($object){
		$author['display_name'] = get_the_author_meta('display_name', $object['author']);
		$author['author_link'] = get_author_posts_url($object['author']);
		return $author;
	}

	/**
	 * wprig Container Width
	 */
	public function wprig_global_container_width() {
		$default = array(
			'sm' => apply_filters( 'wprig_container_sm', 540 ),
			'md' => apply_filters( 'wprig_container_md', 720 ),
			'lg' => apply_filters( 'wprig_container_lg', 960 ),
			'xl' => apply_filters( 'wprig_container_xl', 1140 ),
		);

		$container = wp_parse_args( apply_filters( 'wprig_container_width', $default ), $default );
		wp_register_script( 'wprig_container_width', '' );
		wp_localize_script( 'wprig_container_width', 'wprig_container_width', $container );
		wp_enqueue_script( 'wprig_container_width' );
	}


	public function wprig_editor_bodyclass( $classes ) {

		$current_screen = get_current_screen();

		if ( 'post' == $current_screen->base ) {
			$classes .= 'wprig wprig-editor';
		}
		return $classes;
	}

	public function add_custom_class( $classes ) {
		return array_merge( $classes, array( 'wprig wprig-frontend' ) );
	}

	/**
	 * Init dynamic blocks frontend
	 */
	public function init_dynamic_blocks() {
		require_once WPRIG_WC_DIR_PATH . 'blocks/featured-products.php';
	}

	/**
	 * Load Editor Styles and Scripts
	 *
	 * @since 1.0.0
	 */
	public function wprig_editor_assets() {
		// wp_enqueue_script( 'wprig-wc-blocks-js', WPRIG_WC_DIR_URL . 'assets/js/wprig.dev.js', array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), microtime(), true );
		// echo "The path is at ".WPRIG_WC_DIR_URL.'dist/blocks.build.js';

		wp_enqueue_style( 'wprig-gallery-effects', WPRIG_WC_DIR_URL . 'assets/css/gallery-effects.css', false, microtime() );

		wp_enqueue_script( 'wprig-wc-blocks-js',  WPRIG_WC_DIR_URL.'dist/blocks.build.js', array('media'), microtime(), true );
		
		$palette = get_theme_support( 'wprig-color-palette' );
		$palette = array_replace( array( '#062040', '#566372', '#2084F9', '#F3F3F3', '#EEEEEE', '#FFFFFF' ), ( $palette ? $palette[0] : array() ) );

		$options                     = get_option( 'wprig_options' );
		$wprig_gmap_api_key         = isset( $options['wprig_gmap_api_key'] ) ? $options['wprig_gmap_api_key'] : '';
		$wprig_recaptcha_site_key   = isset( $options['wprig_recaptcha_site_key'] ) ? $options['wprig_recaptcha_site_key'] : '';
		$mc_key                      = isset( $options['mailchimp_api_key'] ) ? $options['mailchimp_api_key'] : '';
		$wprig_recaptcha_secret_key = isset( $options['wprig_recaptcha_secret_key'] ) ? $options['wprig_recaptcha_secret_key'] : '';
		$enable_global_settings      = isset( $options['import_with_global_settings'] ) ? $options['import_with_global_settings'] : false;
		$protocols                   = array( 'http://', 'https://', 'http://www', 'https://www', 'www' );
		wp_localize_script(
			'wprig-wc-blocks-js',
			'wprig_admin',
			array(
				'plugin'                      => WPRIG_WC_DIR_URL,
				'ajax'                        => admin_url( 'admin-ajax.php' ),
				'pro_enable'                  => defined( 'wprig_PRO_VERSION' ) ? true : false,
				'shapes'                      => $this->getSvgShapes(),
				'all_taxonomy'                => $this->get_all_taxonomy(),
				'woocommerce_taxonomy'		  => $this-> fetchProductCategories(),
				'image_sizes'                 => $this->get_all_image_sizes(),
				'palette'                     => $palette,
				'overwriteTheme'              => true,
				'wprig_gmap_api_key'         => $wprig_gmap_api_key,
				'wprig_recaptcha_site_key'   => $wprig_recaptcha_site_key,
				'wprig_recaptcha_secret_key' => $wprig_recaptcha_secret_key,
				'site_url'                    => site_url(),
				'admin_url'                   => admin_url(),
				'actual_url'                  => str_replace( $protocols, '', site_url() ),
				'import_with_global_settings' => $enable_global_settings,
				'publishedPosts'              => wp_count_posts()->publish,
				'mc_key'                      => $mc_key,
			)
		);
	}

	/**
	 * Load SvgShapes
	 *
	 * @since 1.0.0
	 */

	public function getSvgShapes() {
		$shape_path = WPRIG_WC_DIR_PATH . 'shape';
		$shapes     = glob( $shape_path . '/*.svg' );
		$shapeArray = array();
		if ( count( $shapes ) ) {
			foreach ( $shapes as $shape ) {
				$shapeArray[ str_replace( array( '.svg', $shape_path . '/' ), '', $shape ) ] = file_get_contents( $shape );
			}
		}
		return $shapeArray;
	}


	/**
	 * Load SvgShapes
	 *
	 * @since 1.0.0
	 */
	public function getSvgDivider() {
		$divider_path = WPRIG_WC_DIR_PATH . 'assets/divider';
		$dividers     = glob( $divider_path . '/*.svg' );
		$dividerArray = array();
		if ( count( $dividers ) ) {
			foreach ( $dividers as $divider ) {
				$dividerArray[ str_replace( array( '.svg', $divider_path . '/' ), '', $divider ) ] = file_get_contents( $divider );
			}
		}
		return $dividerArray;
	}


	/**
	 * Admin Style & Script
	 *
	 * @since 1.0.0
	 */
	public function wprig_admin_assets() {
		wp_register_script( 'wprig_local_script', '' );
		wp_localize_script(
			'wprig_local_script',
			'wprig_urls',
			array(
				'plugin' => WPRIG_WC_DIR_URL,
				'ajax'   => admin_url( 'admin-ajax.php' ),
				'nonce'  => wp_create_nonce( 'wprig_nonce' ),
			)
		);
		wp_enqueue_script( 'wprig_local_script' );

		#START_REPLACE
		wp_enqueue_style( 'wprig-animated-headline-style', WPRIG_WC_DIR_URL . 'assets/css/wprig.animatedheadline.css', false, microtime() );
		wp_enqueue_style( 'wprig-animation', WPRIG_WC_DIR_URL . 'assets/css/animation.css', false, microtime() );
		wp_enqueue_style( 'wprig-editor-fields-min', WPRIG_WC_DIR_URL . 'assets/css/fields.css', false, microtime() );
		wp_enqueue_style( 'wprig-style-min', WPRIG_WC_DIR_URL . 'assets/css/blocks.editor.min.css', false, microtime() );
		#END_REPLACE

		wp_enqueue_style( 'font-awesome', WPRIG_WC_DIR_URL . 'assets/css/font-awesome.min.css', false, microtime() );
		wp_enqueue_script( 'jquery-animatedHeadline', WPRIG_WC_DIR_URL . 'assets/js/jquery.animatedheadline.js', array( 'jquery' ), microtime(), true );
		
		wp_register_style( 'wprig-options', WPRIG_WC_DIR_URL . 'assets/css/options.css', false, microtime() );

		
	}


	/**
	 * Get Post Types.
	 *
	 * @since 1.0.9
	 */
	public static function get_post_types() {
		$post_types = get_post_types(
			array(
				'public'       => true,
				'show_in_rest' => true,
			),
			'objects'
		);

		$options = array();

		foreach ( $post_types as $post_type ) {
			// if ( 'product' === $post_type->name ) {
			// 	continue;
			// }

			$options[] = array(
				'value' => $post_type->name,
				'label' => $post_type->label,
			);
		}

		return $options;
	}


	/**
	 * Get all taxonomies.
	 *
	 * @since 1.0.9
	 */
	public static function get_all_taxonomy() {
		$post_types = self::get_post_types();

		$taxonomy_array = array();

		foreach ( $post_types as  $value ) {
			$post_type = $value['value'];

			$taxonomies = get_object_taxonomies( $post_type, 'objects' );
			$data       = array();

			foreach ( $taxonomies as $tax_slug => $tax ) {
				if ( ! $tax->public || ! $tax->show_ui ) {
					continue;
				}

				$data[ $tax_slug ] = $tax;

				$terms = get_terms( $tax_slug );

				$related_tax = array();

				if ( ! empty( $terms ) ) {
					foreach ( $terms as  $term ) {
						$related_tax[] = array(
							'value' => $term->term_id,
							'label' => $term->name,
						);
					}

					$taxonomy_array[ $post_type ]['terms'][ $tax_slug ] = $related_tax;
				}
			}
			$taxonomy_array[ $post_type ]['taxonomy'] = $data;
		}

		return $taxonomy_array;
	}
	/**
	 * Get all image sizes.
	 *
	 * @since 1.0.9
	 */
	public static function get_all_image_sizes() {
		global $_wp_additional_image_sizes;

		$sizes       = get_intermediate_image_sizes();
		$image_sizes = array();

		$image_sizes[] = array(
			'value' => 'full',
			'label' => esc_html__( 'Full', 'wprig' ),
		);

		foreach ( $sizes as $size ) {
			if ( in_array( $size, array( 'thumbnail', 'medium', 'medium_large', 'large' ), true ) ) {
				$image_sizes[] = array(
					'value' => $size,
					'label' => ucwords( trim( str_replace( array( '-', '_' ), array( ' ', ' ' ), $size ) ) ),
				);
			} else {
				$image_sizes[] = array(
					'value' => $size,
					'label' => sprintf(
						'%1$s (%2$sx%3$s)',
						ucwords( trim( str_replace( array( '-', '_' ), array( ' ', ' ' ), $size ) ) ),
						$_wp_additional_image_sizes[ $size ]['width'],
						$_wp_additional_image_sizes[ $size ]['height']
					),
				);
			}
		}
		return $image_sizes;
	}


	/**
	 * Frontend Style & Script
	 *
	 * @since 1.0.0
	 */
	public function wprig_enqueue_style() {
		wp_enqueue_style( 'wprig-frontbase', WPRIG_WC_DIR_URL . 'assets/css/frontbase.css', false, microtime() );
		if ( get_post_meta( get_the_ID(), '_wprig_css', true ) != '' ) {

			/*
			 * @warning: Don't Remove `START_REPLACE` and `START_REPLACE` comments. These comments are required for gulp build
			 */
			wp_enqueue_style( 'wprig-gallery-effects', WPRIG_WC_DIR_URL . 'assets/css/gallery-effects.css', false, microtime() );


			#START_REPLACE
			wp_enqueue_style( 'wprig-animated-headline-style', WPRIG_WC_DIR_URL . 'assets/css/wprig.animatedheadline.css', false, microtime() );
			wp_enqueue_style( 'wprig-animation', WPRIG_WC_DIR_URL . 'assets/css/animation.css', false, microtime() );
			wp_enqueue_style( 'wprig-style-min', WPRIG_WC_DIR_URL . 'assets/css/style.min.css', false, microtime() );
			#END_REPLACE

			wp_enqueue_style( 'wprig-font-awesome', WPRIG_WC_DIR_URL . 'assets/css/font-awesome.min.css', false, microtime() );
		}
	}

	public function wprig_enqueue_scripts() {
		wp_register_script( 'wprig_local_script', '' );
		wp_localize_script(
			'wprig_local_script',
			'wprig_urls',
			array(
				'plugin' => WPRIG_WC_DIR_URL,
				'ajax'   => admin_url( 'admin-ajax.php' ),
				'nonce'  => wp_create_nonce( 'wprig_nonce' ),
			)
		);
		wp_enqueue_script( 'wprig_local_script' );

		$blocks_meta_data = get_post_meta( get_the_ID(), '__wprig_available_blocks', true );
		$blocks_meta_data = unserialize( $blocks_meta_data );

		if ( is_array( $blocks_meta_data ) && count( $blocks_meta_data ) ) {
			$available_blocks = $blocks_meta_data['available_blocks'];
			$has_interaction  = $blocks_meta_data['interaction'];
			$has_animation    = $blocks_meta_data['animation'];
			$has_parallax     = $blocks_meta_data['parallax'];

			// if ( in_array( 'wprig/image-carousel', $available_blocks ) ) {
				wp_enqueue_script( 'riseup-gallery', WPRIG_WC_DIR_URL . 'assets/js/riseup-gallery.js', array( 'jquery' ), microtime(), true );
				wp_enqueue_script( 'gallery-carousel', WPRIG_WC_DIR_URL . 'assets/js/front.js', array( 'jquery' ), microtime(), true );
			// }

			wp_localize_script( 'gallery-carousel', 'wprig_gallery',
            array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );

			if ( in_array( 'wprig/animatedheadline', $available_blocks ) ) {
				wp_enqueue_script( 'wprig-animated-headline-script', WPRIG_WC_DIR_URL . 'assets/js/jquery.animatedheadline.js', array( 'jquery' ), microtime(), true );
			}

			if ( in_array( 'wprig/imagecomparison', $available_blocks ) ) {
				wp_enqueue_script( 'wprig-block-image-comparison', WPRIG_WC_DIR_URL . 'assets/js/blocks/image-comparison.js', array(), microtime() );
			}

			if ( $has_interaction ) {
				wp_enqueue_script( 'wprig-interaction', WPRIG_WC_DIR_URL . 'assets/js/interaction.js', array( 'jquery' ), microtime(), true );
			}

		} else {
			$post    = null;
			$wp_post = get_post( $post );
			if ( $wp_post instanceof WP_Post ) {
				$post = $wp_post->post_content;
			}


			wp_enqueue_script( 'wprig-interaction', WPRIG_WC_DIR_URL . 'assets/js/interaction.js', array( 'jquery' ), microtime(), true );
		}



	}

	/**
	 * Load Inline Footer Script
	 *
	 * @since 1.3.0
	 */
	public function wprig_inline_footer_scripts() {        ?>
		<script>
			// Set Preview CSS
			document.addEventListener("DOMContentLoaded", function() {
				const cussrent_url = window.location.href;
				if (cussrent_url.includes('preview=true')) {
					let cssInline = document.createElement('style');
					cssInline.type = 'text/css';
					cssInline.id = 'wprig-block-js-preview';
					cssInline.innerHTML = localStorage.getItem('wprigCSS');
					window.document.getElementsByTagName("head")[0].appendChild(cssInline);
				}
			})
		</script>
		<?php
	}

	/**
	 * Load Inline Admin Header Script
	 *
	 * @since 1.3.0
	 */
	public function wprig_inline_admin_header_scripts() {
		?>
		<script>
			function loadScriptAsync(src) {
				return new Promise((resolve, reject) => {
					const tag = document.createElement('script');
					tag.src = src;
					tag.async = true;
					tag.onload = () => {
						resolve();
					};
					const firstScriptTag = document.getElementsByTagName('script')[0];
					firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
				});
			}
		</script>
		<?php
	}

	/**
	 * Block Category Add
	 *
	 * @since 1.0.0
	 */
	public function wprig_block_categories( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'wprig-wc-blocks',
					'title' => __( 'WPRIG WC Blocks', 'wprig-wc-blocks' ),
				),
			)
		);
	}


	/**
	 * @since 1.0.0-BETA
	 * Add post meta
	 */
	public function add_global_settings_post_meta() {
		register_meta(
			'post',
			'wprig_global_settings',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
			)
		);

		// @since 1.2.0
		register_meta(
			'post',
			'wprig_interactions',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
			)
		);
	}


	/**
	 * @since 1.0.0-BETA
	 * wprig api routes
	 */
	public function register_api_hook() {
		// For update global options
		register_rest_route(
			'wprig/v1',
			'/global_settings/',
			array(
				array(
					'methods'             => 'GET',
					'callback'            => array( $this, 'get_global_option' ),
					'permission_callback' => function () {
						return true;
					},
					'args'                => array(),
				),
				array(
					'methods'             => 'POST',
					'callback'            => array( $this, 'update_global_option' ),
					'permission_callback' => function () {
						return current_user_can( 'edit_posts' );
					},
					'args'                => array(),
				),
			)
		);
		// For css file save
		register_rest_route(
			'wprig/v1',
			'/save_block_css/',
			array(
				array(
					'methods'             => 'POST',
					'callback'            => array( $this, 'save_block_css' ),
					'permission_callback' => function () {
						return current_user_can( 'edit_posts' );
					},
					'args'                => array(),
				),
			)
		);
		// Get the Content by ID
		register_rest_route(
			'wprig/v1',
			'/wprig_get_content/',
			array(
				array(
					'methods'             => 'POST',
					'callback'            => array( $this, 'wprig_get_content' ),
					'permission_callback' => function () {
						return current_user_can( 'edit_posts' );
					},
					'args'                => array(),
				),
			)
		);
		// Append wprig CSS
		register_rest_route(
			'wprig/v1',
			'/append_wprig_css/',
			array(
				array(
					'methods'             => 'POST',
					'callback'            => array( $this, 'append_wprig_css_callback' ),
					'permission_callback' => function () {
						return current_user_can( 'edit_posts' );
					},
					'args'                => array(),
				),
			)
		);

		register_rest_route(
			'wprig/v1',
			'/get_wprig_options',
			array(
				array(
					'methods'             => 'GET',
					'callback'            => array( $this, 'get_wprig_options' ),
					'permission_callback' => function () {
						return current_user_can( 'edit_posts' );
					},
					'args'                => array(),
				),
			)
		);

		register_rest_route(
			'wprig/v1',
			'/add_wprig_options',
			array(
				array(
					'methods'             => 'POST',
					'callback'            => array( $this, 'add_wprig_options' ),
					'permission_callback' => function () {
						return current_user_can( 'edit_posts' );
					},
					'args'                => array(),
				),
			)
		);
	}

	public function add_wprig_options( $request ) {
		try {
			$params  = $request->get_params();
			$options = get_option( 'wprig_options' );
			$key     = sanitize_text_field( $params['key'] );
			$value   = sanitize_text_field( $params['value'] );

			if ( empty( $key ) || empty( $value ) ) {
				throw new Exception( 'Key or value cannot be empty!' );
			}

			$options[ $key ] = $value;
			update_option( 'wprig_options', $options );
			wp_send_json_success( $options );

		} catch ( Exception $e ) {
			wp_send_json_error(
				array(
					'success' => false,
					'message' => $e->getMessage(),
				)
			);
		}
	}

	public function get_wprig_options() {
		$options = get_option( 'wprig_options' );
		wp_send_json_success( $options );
	}

	public function append_wprig_css_callback( $request ) {
		try {
			global $wp_filesystem;
			if ( ! $wp_filesystem ) {
				require_once ABSPATH . 'wp-admin/includes/file.php';
			}
			$params  = $request->get_params();
			$css     = $params['css'];
			$post_id = (int) sanitize_text_field( $params['post_id'] );
			if ( $post_id ) {
				$filename   = "wprig-css-{$post_id}.css";
				$upload_dir = wp_upload_dir();
				$dir        = trailingslashit( $upload_dir['basedir'] ) . 'wprig/';
				if ( file_exists( $dir . $filename ) ) {
					$file = fopen( $dir . $filename, 'a' );
					fwrite( $file, $css );
					fclose( $file );
				}
				$get_data = get_post_meta( $post_id, '_wprig_css', true );
				update_post_meta( $post_id, '_wprig_css', $get_data . $css );

				wp_send_json_success(
					array(
						'success' => true,
						'message' => 'Update done' . $get_data,
					)
				);
			}
		} catch ( Exception $e ) {
			wp_send_json_error(
				array(
					'success' => false,
					'message' => $e->getMessage(),
				)
			);
		}
	}

	public function wprig_get_content( $request ) {
		$params = $request->get_params();
		try {
			if ( isset( $params['postId'] ) ) {
				return array(
					'success' => true,
					'data'    => get_post( $params['postId'] )->post_content,
					'message' => 'Get Data Success!!',
				);
			}
		} catch ( Exception $e ) {
			return array(
				'success' => false,
				'message' => $e->getMessage(),
			);
		}
	}

	/**
	 * @since 1.0.0-BETA
	 * Api for update global option fields
	 */
	public function update_global_option( $request ) {
		try {
			$params = $request->get_params();
			if ( ! isset( $params['settings'] ) ) {
				throw new Exception( 'Settings parameter is missing!' );
			}

			$settings = $params['settings'];

			if ( get_option( $this->option_keyword ) == false ) {
				add_option( $this->option_keyword, $settings );
			} else {
				update_option( $this->option_keyword, $settings );
			}

			return array(
				'success' => true,
				'message' => 'Global option updated!',
			);
		} catch ( Exception $e ) {
			return array(
				'success' => false,
				'message' => $e->getMessage(),
			);
		}
	}

	/**
	 * @since 1.0.0-BETA
	 * API For Get Global options
	 */
	public function get_global_option() {
		try {

			$settings = get_option( $this->option_keyword );

			$settings = $settings == false ? json_decode( '{}' ) : json_decode( $settings );

			$palette = get_theme_support( 'wprig-color-palette' );

			if ( $palette ) {
				$palette                = array_replace( array( '#062040', '#566372', '#2084F9', '#F3F3F3', '#EEEEEE', '#FFFFFF' ), ( $palette ? $palette[0] : array() ) );
				$settings->colorPreset1 = $palette[0];
				$settings->colorPreset2 = $palette[1];
				$settings->colorPreset3 = $palette[2];
				$settings->colorPreset4 = $palette[3];
				$settings->colorPreset5 = $palette[4];
				$settings->colorPreset6 = $palette[6];
			}
			return array(
				'success'  => true,
				'settings' => $settings,
			);
		} catch ( Exception $e ) {
			return array(
				'success' => false,
				'message' => $e->getMessage(),
			);
		}
	}

	/**
	 * @since 1.0.0-BETA
	 * Save block css for each post in a css file and enqueue the file to the post page
	 */
	public function save_block_css( $request ) {
		try {
			global $wp_filesystem;
			if ( ! $wp_filesystem ) {
				require_once ABSPATH . 'wp-admin/includes/file.php';
			}

			$params  = $request->get_params();
			$post_id = (int) sanitize_text_field( $params['post_id'] );

			if ( $params['is_remain'] ) {
				$wprig_block_css = $params['block_css'];
				$filename         = "wprig-css-{$post_id}.css";

				$wprig_block_json = $params['interaction'];
				$jsonfilename      = "wprig-json-{$post_id}.json";

				$upload_dir = wp_upload_dir();
				$dir        = trailingslashit( $upload_dir['basedir'] ) . 'wprig/';

				// Add Import in first
				$import_first = $this->set_import_url_to_top_css( $wprig_block_css );

				// development
				update_post_meta( $post_id, '_wprig_css', $import_first );
				if ( $wprig_block_json ) {
					update_post_meta( $post_id, '_wprig_interaction_json', $wprig_block_json );
				}

				WP_Filesystem( false, $upload_dir['basedir'], true );

				if ( ! $wp_filesystem->is_dir( $dir ) ) {
					$wp_filesystem->mkdir( $dir );
				}
				// If fail to save css in directory, then it will show a message to user
				if ( ! $wp_filesystem->put_contents( $dir . $filename, $import_first ) ) {
					throw new Exception( __( 'CSS can not be saved due to permission!!!', 'wprig' ) );
				}

				// If fail to save css in directory, then it will show a message to user
				if ( ! $wp_filesystem->put_contents( $dir . $jsonfilename, $wprig_block_json ) ) {
					throw new Exception( __( 'JSON can not be saved due to permission!!!', 'wprig' ) );
				}
			} else {
				delete_post_meta( $post_id, '_wprig_css' );
				delete_post_meta( $post_id, '_wprig_interaction_json' );
				$this->delete_post_resource( $post_id );
			}

			// set block meta
			update_post_meta( $post_id, '__wprig_available_blocks', serialize( $params['available_blocks'] ) );
			return array(
				'success' => true,
				'message' => __( 'wprig block css file has been updated.', 'wprig' ),
				'data'    => $params,
			);
		} catch ( Exception $e ) {
			return array(
				'success' => false,
				'message' => $e->getMessage(),
			);
		}
	}


	/**
	 * @since 1.0.2
	 * Set font import to the top of the CSS file
	 */
	public function set_import_url_to_top_css( $get_css = '' ) {
		$css_url            = "@import url('https://fonts.googleapis.com/css?family=";
		$google_font_exists = substr_count( $get_css, $css_url );

		if ( $google_font_exists ) {
			$pattern = sprintf(
				'/%s(.+?)%s/ims',
				preg_quote( $css_url, '/' ),
				preg_quote( "');", '/' )
			);

			if ( preg_match_all( $pattern, $get_css, $matches ) ) {
				$fonts   = $matches[0];
				$get_css = str_replace( $fonts, '', $get_css );
				if ( preg_match_all( '/font-weight[ ]?:[ ]?[\d]{3}[ ]?;/', $get_css, $matche_weight ) ) { // short out font weight
					$weight = array_map(
						function ( $val ) {
							$process = trim( str_replace( array( 'font-weight', ':', ';' ), '', $val ) );
							if ( is_numeric( $process ) ) {
								return $process;
							}
						},
						$matche_weight[0]
					);
					foreach ( $fonts as $key => $val ) {
						$fonts[ $key ] = str_replace( "');", '', $val ) . ':' . implode( ',', $weight ) . "');";
					}
				}

				// Multiple same fonts to single font
				$fonts   = array_unique( $fonts );
				$get_css = implode( '', $fonts ) . $get_css;
			}
		}
		return $get_css;
	}


	/**
	 * @return bool|false|int
	 *
	 * determine if current single page is WP Page Builder Page
	 */
	private function is_wprig_single() {
		$post_id = get_the_ID();

		if ( ! $post_id ) {
			return false;
		}
		return $post_id;
	}

	/**
	 *
	 * determine if wppb editor is open
	 *
	 * @since V.1.0.0
	 * @return bool
	 *
	 * @since v.1.0.0
	 */
	private function is_editor_screen() {
		if ( ! empty( $_GET['action'] ) && $_GET['action'] === 'wppb_editor' ) {
			return true;
		}
		return false;
	}


	/**
	 * Enqueue post style
	 * If css save option fileSystem then enqueue file
	 * Or add inline to the header
	 */
	public function enqueue_block_css() {
		// if(!isset($_GET['preview'])){
		$option_data = get_option( 'wprig_options' );
		$css_save_as = isset( $option_data['css_save_as'] ) ? $option_data['css_save_as'] : 'wp_head';
		if ( $css_save_as == 'filesystem' ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_block_css_file' ) );
		} else {
			add_action( 'wp_head', array( $this, 'add_block_inline_css' ), 100 );
		}
		// }
	}

	/**
	 *
	 * Return reference id
	 *
	 * @since 1.2.5
	 * @return bool
	 */
	public function reference_id( $parse_blocks ) {
		$extra_id = array();
		if ( ! empty( $parse_blocks ) ) {
			foreach ( $parse_blocks as $key => $block ) {
				if ( $block['blockName'] == 'core/block' ) {
					$extra_id[] = $block['attrs']['ref'];
				}
				if ( count( $block['innerBlocks'] ) > 0 ) {
					$extra_id = array_merge( $this->reference_id( $block['innerBlocks'] ), $extra_id );
				}
			}
		}
		return $extra_id;
	}


	/**
	 * Enqueue block css file
	 * Check if css path exists and it has current post page
	 * Then enqueue file
	 */
	public function enqueue_block_css_file() {
		$post_id        = $this->is_wprig_single();
		$upload_dir     = wp_get_upload_dir();
		$upload_css_dir = trailingslashit( $upload_dir['basedir'] );
		$css_path       = $upload_css_dir . "wprig/wprig-css-{$post_id}.css";
		$json_path      = $upload_css_dir . "wprig/wprig-json-{$post_id}.json";

		if ( file_exists( $css_path ) ) {
			$css_dir_url = trailingslashit( $upload_dir['baseurl'] );
			$css_url     = $css_dir_url . "wprig/wprig-css-{$post_id}.css";
			if ( ! $this->is_editor_screen() ) {
				wp_enqueue_style( "wprig-post-{$post_id}", $css_url, false, microtime() );
			}
			$this->add_reusable_css();
		} else {
			wp_register_style( 'wprig-post-data', false );
			wp_enqueue_style( 'wprig-post-data' );
			wp_add_inline_style( 'wprig-post-data', get_post_meta( get_the_ID(), '_wprig_css', true ) );
		}

		if ( ! file_exists( $json_path ) ) {
			$this->print_interaction_json_to_header();
		} else {
			$blockJson = file_get_contents( $json_path );
			if ( $blockJson != '{}' ) {
				echo '<script type="text/javascript"> var wprigInteraction = ' . $blockJson . '</script>';
			}
		}
	}

	public function add_reusable_css() {
		$post_id        = $this->is_wprig_single();
		$upload_dir     = wp_get_upload_dir();
		$upload_css_dir = trailingslashit( $upload_dir['basedir'] );
		if ( $post_id ) {
			$content_post = get_post( $post_id );
			if ( isset( $content_post->post_content ) ) {
				$content      = $content_post->post_content;
				$parse_blocks = parse_blocks( $content );
				$css_id       = $this->reference_id( $parse_blocks );
				if ( is_array( $css_id ) ) {
					if ( ! empty( $css_id ) ) {
						$css_id = array_unique( $css_id );
						foreach ( $css_id as $value ) {
							$css = $upload_css_dir . "wprig/wprig-css-{$value}.css";
							if ( file_exists( $upload_css_dir . "wprig/wprig-css-{$value}.css" ) ) {
								wp_enqueue_style( "wprig-post-{$value}", trailingslashit( $upload_dir['baseurl'] ) . "wprig/wprig-css-{$value}.css", false, microtime() );
							}
						}
					}
				}
			}
		}
	}

	/**
	 * Check current post page open and css path exists
	 * Then read the css file content from css path
	 * Then add inline css to the header
	 */
	public function add_block_inline_css() {
		$post_id = $this->is_wprig_single();

		if ( $post_id ) {
			$upload_dir     = wp_get_upload_dir();
			$upload_css_dir = trailingslashit( $upload_dir['basedir'] );
			$css_path       = $upload_css_dir . "wprig/wprig-css-{$post_id}.css";
			$json_path      = $upload_css_dir . "wprig/wprig-json-{$post_id}.json";

			if ( file_exists( $css_path ) ) {
				$blockCss = file_get_contents( $css_path );
				echo '<style type="text/css">' . $blockCss . '</style>';
			} else {
				echo '<style type="text/css">' . get_post_meta( get_the_ID(), '_wprig_css', true ) . '</style>';
			}

			if ( ! file_exists( $json_path ) ) {
				$this->print_interaction_json_to_header();
			} else {
				$blockJson = file_get_contents( $json_path );
				if ( $blockJson != '{}' ) {
					echo '<script type="text/javascript"> var wprigInteraction = ' . $blockJson . '</script>';
				}
			}
		}
		$this->add_reusable_css();
	}

	/**
	 * @since 1.2.0
	 * Interaction Add
	 */
	public function print_interaction_json_to_header() {
		$post_id         = get_the_ID();
		$interactionJson = get_post_meta( $post_id, '_wprig_interaction_json', true );
		if ( $interactionJson != '{}' && $interactionJson != '' ) {
			echo '<script type="text/javascript"> var wprigInteraction = ' . $interactionJson . '</script>';
		}
	}

	/**
	 * Check if the post has been delete operation
	 */
	public function before_delete_post() {
		// $this->delete_post_resource();
	}
	/**
	 * Delete post releated data
	 *
	 * @delete post css file
	 */
	private function delete_post_resource( $post_id = '' ) {
		$post_id = $post_id ? $post_id : $this->is_wprig_single();
		if ( $post_id ) {
			$upload_dir     = wp_get_upload_dir();
			$upload_css_dir = trailingslashit( $upload_dir['basedir'] );
			$css_path       = $upload_css_dir . "wprig/wprig-css-{$post_id}.css";
			$json_path      = $upload_css_dir . "wprig/wprig-json-{$post_id}.json";
			if ( file_exists( $css_path ) ) {
				unlink( $css_path );
			}
			if ( file_exists( $json_path ) ) {
				unlink( $json_path );
			}
		}
	}

	/**
	 * @since 1.0.0-BETA
	 * Get Blocks
	 */
	public function wprig_get_sections() {
		 // $cachedBlockFile = "wprig-wc-blocks.json";
		// $cache_time = ( 60*60*24*7 ); //cached for 7 days

		$sectionData = array();

		// $upload_dir = wp_upload_dir();
		// $dir = trailingslashit( $upload_dir[ 'basedir' ] ) . 'wprig/cache/';
		// $file_path_name = $dir . $cachedBlockFile;

		/*
		 if ( file_exists( $file_path_name ) && ( filemtime( $file_path_name ) + $cache_time ) > time() ) {
			$getBlocksFromCached = file_get_contents( $file_path_name );
			$sectionData = json_decode( $getBlocksFromCached, true );
			$cached_at = 'Last cached: '.human_time_diff( filemtime($file_path_name), current_time( 'timestamp') ). ' ago';

			wp_send_json( array( 'success' => true, 'cached_at' => $cached_at,  'data' => $sectionData ) );
		} else { */
		$sectionData = $this->load_blocks_from_server();
		// }

		wp_send_json_success( $sectionData );
	}

	/**
	 * @since 1.0.0-BETA
	 * Load Blocks from Server
	 */
	public function load_blocks_from_server() {
		$apiUrl = $this->api_base_url . 'sections';

		$post_args         = array( 'timeout' => 120 );
		$body_param        = array_merge( $this->wprig_api_request_body_default, array( 'request_for' => 'get_all_sections' ) );
		$post_args['body'] = array_merge( $body_param, $this->wprig_api_request_body );
		$blockRequest      = wp_remote_post( $apiUrl, array() );
		if ( is_wp_error( $blockRequest ) ) {
			wp_send_json_error( array( 'messages' => $blockRequest->get_error_messages() ) );
		}
		$blockData = json_decode( $blockRequest['body'], true );
		/*
		 $cachedBlockFile = "wprig-wc-blocks.json";
		$upload_dir = wp_upload_dir();
		$dir = trailingslashit( $upload_dir[ 'basedir' ] ) . 'wprig/cache/';
		$file_path_name = $dir . $cachedBlockFile;
		if ( ! file_exists( $dir ) ) {
			mkdir( $dir, 0777, true );
		}
		file_put_contents( $file_path_name,  json_encode( $blockData ) ); // Put template content to cached directory
		 */
		return $blockData;
	}

	/**
	 * @since 1.0.0-BETA
	 * Get Blocks
	 */
	public function wprig_get_layouts() {
		// $cachedLayoutFile = "wprig-layouts.json";
		// $cache_time = ( 60*60*24*7 ); //cached for 7 days

		$layoutData = array();

		// $upload_dir = wp_upload_dir();
		// $dir = trailingslashit( $upload_dir[ 'basedir' ] ) . 'wprig/cache/';
		// $file_path_name = $dir . $cachedLayoutFile;

		/*
		 if ( file_exists( $file_path_name ) && ( filemtime( $file_path_name ) + $cache_time ) > time() ) {
			$getLayoutFromCached = file_get_contents($file_path_name);
			$layoutData = json_decode($getLayoutFromCached, true);
			$cached_at = 'Last cached: '.human_time_diff( filemtime( $file_path_name ), current_time( 'timestamp' ) ). ' ago';

			wp_send_json( array( 'success' => true, 'cached_at' => $cached_at,  'data' => $layoutData ) );
		} else { */
		$layoutData = $this->load_layouts_from_server();
		// }

		wp_send_json_success( $layoutData );
	}

	/**
	 * @since 1.0.0-BETA
	 * Load Blocks from Server
	 */
	public function load_layouts_from_server() {
		$apiUrl = $this->api_base_url . 'layouts';

		$post_args         = array( 'timeout' => 120 );
		$body_param        = array_merge( $this->wprig_api_request_body_default, array( 'request_for' => 'get_all_layouts' ) );
		$post_args['body'] = array_merge( $body_param, $this->wprig_api_request_body );
		$layoutRequest     = wp_remote_post( $apiUrl, $post_args );
		if ( is_wp_error( $layoutRequest ) ) {
			wp_send_json_error( array( 'messages' => $layoutRequest->get_error_messages() ) );
		}
		$layoutData = json_decode( $layoutRequest['body'], true );
		/*
		 $cachedLayoutFile = "wprig-layouts.json";
		$upload_dir = wp_upload_dir();
		$dir = trailingslashit( $upload_dir[ 'basedir' ] ) . 'wprig/cache/';
		$file_path_name = $dir . $cachedLayoutFile;
		if ( ! file_exists( $dir ) ) {
			mkdir( $dir, 0777, true );
		}
		file_put_contents( $file_path_name,  json_encode( $layoutData ) ); // Put template content to cached directory
		 */
		return $layoutData;
	}


	/**
	 * @since 1.0.0
	 * Get single layout
	 */
	public function wprig_get_single_layout() {
		$layout_id = (int) sanitize_text_field( $_REQUEST['layout_id'] );

		// $cache_time = ( 60*60*24*7 ); //cached for 7 days
		// $cachedSingleLayoutFile = "wprig-single-layout-{$layout_id}.json";
		// $upload_dir = wp_upload_dir();
		// $dir = trailingslashit( $upload_dir['basedir'] ) . 'wprig/cache/layouts/';
		// $file_path_name = $dir . $cachedSingleLayoutFile;
		// Checking if exists file and cache validity true
		/*
		 if ( file_exists( $file_path_name ) && ( filemtime( $file_path_name ) + $cache_time ) > time() ) {
			$getSingleLayoutFromCached = file_get_contents( $file_path_name );
			$layoutData = json_decode( $getSingleLayoutFromCached, true );
		} else { */
		$layoutData = $this->load_and_cache_single_layout_from_server( $layout_id );
		// }
		wp_send_json_success( $layoutData );
	}

	/**
	 * @since 1.0.0(Stable)
	 * Get single layout
	 */
	public function wprig_get_single_section() {
		$section_id  = (int) sanitize_text_field( $_REQUEST['block_id'] );
		$sectionData = $this->load_and_cache_single_section_from_server( $section_id );
		wp_send_json_success( $sectionData );
	}

	/**
	 * @since 1.0.0(Stable)
	 * Get single section
	 */
	public function load_and_cache_single_section_from_server( $section_id = 0 ) {
		if ( ! $section_id ) {
			return false;
		}
		$apiUrl = $this->api_base_url . 'single-section';

		$post_args = array( 'timeout' => 120 );

		$body_param        = array_merge(
			$this->wprig_api_request_body_default,
			array(
				'request_for' => 'get_single_section',
				'section_id'  => $section_id,
			)
		);
		$post_args['body'] = array_merge( $body_param, $this->wprig_api_request_body );
		$sectionRequest    = wp_remote_post( $apiUrl, $post_args );

		if ( is_wp_error( $sectionRequest ) ) {
			wp_send_json_error( array( 'messages' => $sectionRequest->get_error_messages() ) );
		}

		$sectionData = json_decode( $sectionRequest['body'], true );

		return $sectionData;
	}


	/**
	 * @since 1.0.0-BETA
	 * Load single layout and cache it
	 */
	public function load_and_cache_single_layout_from_server( $layout_id = 0 ) {
		if ( ! $layout_id ) {
			return false;
		}
		$apiUrl = $this->api_base_url . 'single-layout';

		$post_args = array( 'timeout' => 120 );

		$body_param        = array_merge(
			$this->wprig_api_request_body_default,
			array(
				'request_for' => 'get_single_layout',
				'layout_id'   => $layout_id,
			)
		);
		$post_args['body'] = array_merge( $body_param, $this->wprig_api_request_body );
		$layoutRequest     = wp_remote_post( $apiUrl, $post_args );

		if ( is_wp_error( $layoutRequest ) ) {
			wp_send_json_error( array( 'messages' => $layoutRequest->get_error_messages() ) );
		}

		$layoutData = json_decode( $layoutRequest['body'], true );
		/*
		 $cachedLayoutFile = "wprig-single-layout-{$layout_id}.json";
		$upload_dir = wp_upload_dir();
		$dir = trailingslashit( $upload_dir[ 'basedir' ] ) . 'wprig/cache/layouts/';
		$file_path_name = $dir . $cachedLayoutFile;
		if ( ! file_exists( $dir ) ) {
			mkdir( $dir, 0777, true );
		}
		file_put_contents( $file_path_name,  json_encode( $layoutData ) );  */

		return $layoutData;
	}

	/**
	 * @since 1.0.0-BETA
	 * Get saved blocks
	 */
	public function wprig_get_saved_block() {
		$args      = array(
			'post_type'   => 'wp_block',
			'post_status' => 'publish',
		);
		$r         = wp_parse_args( null, $args );
		$get_posts = new WP_Query();
		$wp_blocks = $get_posts->query( $r );
		wp_send_json_success( $wp_blocks );
	}

	/**
	 * @since 1.0.0-BETA
	 * Delete saved blocks
	 */
	public function wprig_delete_saved_block() {
		$block_id      = (int) sanitize_text_field( $_REQUEST['block_id'] );
		$deleted_block = wp_delete_post( $block_id );
		wp_send_json_success( $deleted_block );
	}


	/**
	 * Ajax for sending form data
	 *
	 * @return boolean,void     Return false if failure, echo json on success
	 */
	public function wprig_send_form_data() {
		if ( isset( $_POST['captcha'] ) && $_POST['recaptcha'] == 'true' ) {
			$captcha   = $_POST['captcha'];
			$secretKey = $_POST['recaptcha-secret-key'];
			$verify    = wp_remote_get( "https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$captcha}" );

			if ( ! is_array( $verify ) || ! isset( $verify['body'] ) ) {
				wp_send_json( __( 'Cannot validate captcha', 'wprig' ), 400 );
			}

			$verified = json_decode( $verify['body'] );
			if ( ! $verified->success ) {
				wp_send_json( __( 'Captcha validation error', 'wprig' ), 400 );
			}
		}

		// Settings data
		$fieldErrorMessage  = ( $_POST['field-error-message'] ) ? base64_decode( $_POST['field-error-message'] ) : '';
		$formSuccessMessage = ( $_POST['form-success-message'] ) ? base64_decode( $_POST['form-success-message'] ) : '';
		$formErrorMessage   = ( $_POST['form-error-message'] ) ? base64_decode( $_POST['form-error-message'] ) : '';
		$emailReceiver      = ( $_POST['email-receiver'] ) ? base64_decode( $_POST['email-receiver'] ) : '';
		$emailHeaders       = ( $_POST['email-headers'] ) ? base64_decode( $_POST['email-headers'] ) : '';
		$emailFrom          = ( $_POST['email-from'] ) ? base64_decode( $_POST['email-from'] ) : '';
		$emailSubject       = ( $_POST['email-subject'] ) ? base64_decode( $_POST['email-subject'] ) : '';
		$emailBody          = ( $_POST['email-body'] ) ? base64_decode( $_POST['email-body'] ) : '';

		$fieldNames     = array();
		$validation     = false;
		$formInputArray = $_POST['wprig-form-input'];
		foreach ( $formInputArray as $key => $value ) {
			if ( preg_match( '/[*]$/', $key ) ) {
				if ( empty( $value ) ) {
					$validation = true;
				}
				$key = str_replace( '*', '', $key );
			}
			$fieldNames[ $key ] = $value;
		}

		if ( $validation || ( isset( $_POST['wprig-form-has-policy'] ) && empty( $_POST['wprig-form-has-policy'] ) ) ) {
			wp_send_json( __( $formErrorMessage, 'wprig' ), 400 );
		}

		$replyToMail = $replyToName = $cc = $bcc = $fromName = $fromEmail = '';
		if ( $emailFrom != '' ) {
			$emailFrom = explode( ':', $emailFrom );
			if ( count( $emailFrom ) > 0 ) {
				$fromName  = isset( $emailFrom[0] ) ? trim( $emailFrom[0] ) : '';
				$fromEmail = isset( $emailFrom[1] ) ? trim( $emailFrom[1] ) : '';
			}
		}

		$emailHeaders = explode( "\n", $emailHeaders );
		foreach ( $emailHeaders as $_header ) {
			$_header = explode( ':', $_header );
			if ( count( $_header ) > 0 ) {
				if ( strtolower( $_header[0] ) == 'reply-to' ) {
					$replyToMail = isset( $_header[1] ) ? trim( $_header[1] ) : '';
				}
				if ( strtolower( $_header[0] ) == 'reply-name' ) {
					$replyToName = isset( $_header[1] ) ? trim( $_header[1] ) : '';
				}
				if ( strtolower( $_header[0] ) == 'cc' ) {
					$cc = isset( $_header[1] ) ? trim( $_header[1] ) : '';
				}
				if ( strtolower( $_header[0] ) == 'bcc' ) {
					$bcc = isset( $_header[1] ) ? trim( $_header[1] ) : '';
				}
			}
		}

		foreach ( $fieldNames as $name => $value ) {
			$value        = is_array( $fieldNames[ $name ] ) ? implode( ', ', $fieldNames[ $name ] ) : $value;
			$emailBody    = str_replace( '{{' . $name . '}}', $value, $emailBody );
			$emailSubject = str_replace( '{{' . $name . '}}', $value, $emailSubject );
			$replyToName  = str_replace( '{{' . $name . '}}', $value, $replyToName );
			$replyToMail  = str_replace( '{{' . $name . '}}', $value, $replyToMail );
			$fromName     = str_replace( '{{' . $name . '}}', $value, $fromName );
			$cc           = str_replace( '{{' . $name . '}}', $value, $cc );
			$bcc          = str_replace( '{{' . $name . '}}', $value, $bcc );
		}

		// Subject Structure
		$siteName     = isset( $_SERVER['SERVER_NAME'] ) ? $_SERVER['SERVER_NAME'] : '';
		$emailSubject = str_replace( '{{site-name}}', $siteName, $emailSubject );

		$headers[] = 'Content-Type: text/html; charset=UTF-8';
		$headers[] = 'From: ' . $fromName . ' <' . $fromEmail . '>';
		$headers[] = 'Reply-To: ' . $replyToName . ' <' . $replyToMail . '>';
		$headers[] = 'Cc: <' . $cc . '>';
		$headers[] = 'Bcc: <' . $bcc . '>';

		// Send E-Mail Now or through error msg.
		try {
			$isMail = wp_mail( $emailReceiver, $emailSubject, $emailBody, $headers );
			if ( $isMail ) {
				$responseData['status'] = 1;
				$responseData['msg']    = __( $formSuccessMessage, 'wprig' );
			} else {
				$responseData['status'] = 0;
				$responseData['msg']    = __( $formErrorMessage, 'wprig' );
			}
			wp_send_json_success( $responseData );
		} catch ( \Exception $e ) {
			$responseData['status'] = 0;
			$responseData['msg']    = $e->getMessage();
			wp_send_json_error( $responseData );
		}
	}
}

new WPRIG_Woocommerce_Blocks();