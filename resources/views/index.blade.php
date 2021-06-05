<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Orders</title>

  <!-- BootStrap CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

  <!-- CSS -->
  <link rel="stylesheet" href="/css/header-menu.css">
  <link rel="stylesheet" href="/css/content-main.css">


</head>
<body>
  <main id="content-main">
    
    <div>
      <header-menu order="#" info="info"/>
    </div>

    <div>
      <orders-info/>
    </div>
      
  </main>

  <!-- Bootstrap.js  -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

  <!-- Vue.Js -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

  <!-- Components -->
  <script src="/components/HeaderMenu.js"></script>
  <script src="/components/OrdersInfo.js"></script>

  <!-- Script Js -->
  <script src="/js/index.js"></script>
  
</body>
</html>