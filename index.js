$( document ).ready(function() {
  $("button").click(function(event) {
     event.preventDefault();

     //Change Quotes
     let quote = getRandomQuote();
     $(".mb-0").html(quote.quote);
     $(".blockquote-footer").html(quote.author);

     //Change Background Color
     let color = getRandomColor();
     $("body").css({
      transition : 'background-color 1s ease-in-out',
      "background-color": color
    });

  });
});


const getRandomQuote = () => {
  let newNum = randomNum(quoteList);
  return quoteList[newNum];
};

const getRandomColor = () => {
  let newColor = randomNum(colorList);
  return colorList[newColor];
};


const randomNum = (item) => {
  return Math.floor(Math.random() * (item.length- 0));
};

const quoteList = [
  {quote: "Like a fish, one should look for a hole in the net.", author: "Samoan Proverb"},
  {quote:"Persevere like a bird in the wind.", author: 'Samoan Proverb'},
  {quote:"Life is like this: sometimes sun, sometimes rain.", author: "Fijian Proverb"},
  {quote:"All knowledge is not taught in one school.", author: "Hawaiian Proverb"},
  {quote:"Take care of your body. Its the only place you have to live.", author: "Jim Rohn"},
  {quote:"Failure is success if we learn from it.", author: "Malcolm S. Forbes"}
];

const colorList = [
  "AliceBlue","Aqua", "Aquamarine","Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","ForestGreen","Fuchsia","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MistyRose","Moccasin","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","Yellow","YellowGreen"
];
