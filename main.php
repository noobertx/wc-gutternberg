<?php // phpcs:ignore Squiz.Commenting.FileComment.Missing
/**
 * Riseup Gallery Blocks, a simple, truly extensible Gallery . Developed with WordPress coding
 * standards and PHP best practices in mind.
 *
 * Plugin Name:     WPRIG Woocommerce Blocks
 * Plugin URI:      http://wordpress.org/plugins/riseup-blocks
 * Author:          Robert Talavera
 * Author URI:      http://robert-talavera.com
 * Version:         1.0.0
 * Text Domain:     wprog-woocommerce
 * License:         GPLv3 or later
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @author          Robert Talavera
 */


 // Define Dir URL
define('WPRIG_WC_DIR_URL', plugin_dir_url(__FILE__));

// Define Physical Path
define('WPRIG_WC_DIR_PATH', plugin_dir_path(__FILE__));

require_once  'main.class.php'; 






//category list
if (!function_exists('wprig_get_category_list')) {
    function wprig_get_category_list($object)
    {
        return get_the_category_list(esc_html__(' '), '', $object['id']);
    }
}









// add_action('init', 'wprig_register_api_hook');


