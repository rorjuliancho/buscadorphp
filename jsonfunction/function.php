<?php
function allresource(){
  $data = file_get_contents("data-1.json");
  $infojson = json_decode($data, true);

  foreach ($infojson as $infojson) {
      echo '<pre>';
      echo ($infojson);
      echo '</pre>';
  }
}


?>
