import React from 'react';

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    image : "https://www.google.com/imgres?imgurl=http%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2015%2F04%2F02%2F238f0a3e8b567db1229b0f27220033341.jpg&imgrefurl=http%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6386635&tbnid=apalpX5sNn-GIM&vet=12ahUKEwjs8vG0jt3kAhVWxIsBHfwJBswQMygAegUIARCJAg..i&docid=o-00Lukymxnk6M&w=800&h=533&q=%EA%B9%80%EC%B9%98&ved=2ahUKEwjs8vG0jt3kAhVWxIsBHfwJBswQMygAegUIARCJAg"
  },
  {
    id : 2,
    name : "samgyeobsal",
    image : "https://www.google.com/imgres?imgurl=http%3A%2F%2Fstatic.hubzum.zumst.com%2Fhubzum%2F2018%2F02%2F05%2F10%2F537ad9725ded4dd7bcdd432237a87c5b.jpg&imgrefurl=http%3A%2F%2Fhub.zum.com%2Fdaily%2F20255&tbnid=y0OsRgeeBmJn-M&vet=12ahUKEwj91IrIjt3kAhVPeZQKHVQ7ClYQMygFegUIARCBAg..i&docid=GB-jiwwuC9K9aM&w=600&h=400&q=%EC%82%BC%EA%B2%B9%EC%82%B4&ved=2ahUKEwj91IrIjt3kAhVPeZQKHVQ7ClYQMygFegUIARCBAg"
  },
  {
    id : 3,
    name : "jjukkumi",
    image : "https://www.google.com/imgres?imgurl=http%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2019%2F03%2F05%2F52d2be99c015378a75c9db81362422c71.jpg&imgrefurl=http%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6907777&tbnid=IVeNiel0fhc6vM&vet=12ahUKEwj7z_Trjt3kAhVTz5QKHWQkD8UQMygDegQIARBI..i&docid=r48IA54eom-a_M&w=900&h=600&q=%EC%AD%88%EA%BE%B8%EB%AF%B8%EB%B3%B6%EC%9D%8C&ved=2ahUKEwj7z_Trjt3kAhVTz5QKHWQkD8UQMygDegQIARBI"
  },
  {
    id : 4,
    name : "hwangdo",
    image : "https://www.google.com/imgres?imgurl=http%3A%2F%2Fmblogthumb2.phinf.naver.net%2FMjAxODAyMjFfMTYg%2FMDAxNTE5MjEwMDAzMDM0.xRsEB5SGRgdKrtokshug6AT0jYQ21PePZCbaPD3_c6cg.wM2agku_O7PksIDC0ck7zCDKmaSezLfZJxuvzQcL4SAg.JPEG.sang931004%2Fimage_9696267691518969924509.jpg%3Ftype%3Dw800&imgrefurl=http%3A%2F%2Fm.blog.naver.com%2Fsang931004%2F221213514916&tbnid=QR01ooI-okRVxM&vet=12ahUKEwjRi-Hbjt3kAhWKAaYKHTHUBJ4QMygCegQIARBX..i&docid=zecN0_L-SzB4-M&w=465&h=456&q=%ED%99%A9%EB%8F%84&ved=2ahUKEwjRi-Hbjt3kAhWKAaYKHTHUBJ4QMygCegQIARBX"
  }
];

function Food({image}) {
  return <img src={image} />;
}

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} image={dish.image}/>)}
    </div>
  );
}

export default App;