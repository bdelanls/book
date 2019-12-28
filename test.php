<?php
$annee = date('Y');
$fichier = 'logs/stat_'.$annee.'.txt';

date_default_timezone_set('Europe/Paris');
$date = date('d/m/Y H:i:s');
$ip = $_SERVER['REMOTE_ADDR'];
$agent = $_SERVER['HTTP_USER_AGENT'];		// information sur la machine client (ordi, navigateur, pays)

$referer = !$_SERVER['HTTP_REFERER'] ? 'NULL' : $_SERVER['HTTP_REFERER'] ;

$infos = "$date \t $ip \t $agent \t $referer \n";

if(file_exists($fichier)) {
    $arg = 'a+';
}else{
    $arg = 'w+';
}

$lecture = fopen($fichier, $arg);
fwrite($lecture, $infos);
fclose($lecture);


echo $infos;

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>test de fichier sur serveur</h1>
</body>
</html>