<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>CSS做个悬浮球 </title>
    <style type="text/css">
    <div class="container"><div class="wave"></div></div>
    .container {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solid #67c23a;
        background: #ffffff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 5px;
    }
    .wave {
        position: relative;
        width: 100px;
        height: 100px;
        background-image: linear-gradient(-180deg, #aaff80 13%, #67c23a 91%);
        border-radius: 50%;
    }
    </style>
    </head>

<body>

</body>

</html>


