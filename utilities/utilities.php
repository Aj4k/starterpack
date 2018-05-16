<?php


function debug($variable) {
    echo '<pre>'.print_r($variable, true).'</pre>';
}

// try {
//   $pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'root');
//
// } catch (PDOException $e) {
// 	var_dump($e->getMessage());
//   die();
// }
