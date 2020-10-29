names=["Peter","Lukas","Igor","Jan"];
names.forEach((man) => {
  if (man==="Jan")
  $('ul').append(
    '<b><li>'+man+'</li></b>'
  );
  else
    $('ul').append(
        '<li>'+man+'</li>'
      );
  });

  let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $('body').append(
    '<h1>'+additionalBlock.title+'</h1>'
  );
  $('body').append(
    '<p>'+additionalBlock.text+'</p>'
  );
