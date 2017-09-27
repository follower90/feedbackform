<?php

header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/vendor/autoload.php';

\Core\Config::registerProject('App', 'default');

$project = new \App\EntryPoint\Service();
$project->init();
