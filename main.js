const products_content = Vue.createApp({
  data() {
    return {
      products: [
        {
          image: "shirt1.webp",
          otherImage: "shirt1-r.webp",
          info: "Áo Babytee Local Brand Teelab Studio Baby Sheep Cute BT013",
          sale: "150.000đ",
          root: "210.000đ",
          isActive: false,
        },
        {
          image: "shirt2.webp",
          otherImage: "shirt2-r.webp",
          info: "Áo Thun Teelab Local Brand Unisex Love Is In The Air TS199",
          sale: "199.000đ",
          root: "350.000đ",
          isActive: false,
        },
        {
          image: "shirt3.webp",
          otherImage: "shirt3-r.webp",
          info: "Áo Thun Teelab Local Brand Unisex The Eyes T-Shirt TS206",
          sale: "140.000đ",
          root: "270.000đ",
          isActive: false,
        },
      ],
      title: "Áo Thun",
    };
  },
  //   methods: {
  //     onlogevent(event) {
  //       console.log("loading event", this);
  //       this.isActive = !this.isActive;
  //     },
  //   },
  template: `
    
<div class="title_products_content">
    <h1>{{title}}</h1>
</div>
<div class="products_content_chil">
    <div class="product_content" v-for="product in products">
        <img v-if="product.isActive" v-bind:src="'/shirts/' + product.otherImage" @mouseover="product.isActive = !product.isActive" alt="{{product.image}}">
        <img v-else v-bind:src="'/shirts/' + product.image" @mouseover="product.isActive = !product.isActive" alt="{{product.image}}">
        <button><img v-bind:src="'/shirts/' + product.image" alt=""></button>
        <p class="info_product">{{product.info}}</p>
        <div class="price_product">
            <p class="sale_product">{{product.sale}}</p>
            <del class="root_product">{{product.root}}</del>
        </div>
    </div>
</div>
    
    `,
}).mount(".products_content");







const products_content_1 = Vue.createApp({
    data() {
      return {
        products: [
          {
            image: "shirt4.webp",
            otherImage: "shirt4-r.webp",
            info: "Áo Babytee Local Brand Teelab Studio Baby Sheep Cute BT013",
            sale: "150.000đ",
            root: "250.000đ",
            isActive: false,
          },
          {
            image: "shirt5.webp",
            otherImage: "shirt5-r.webp",
            info: "Áo Thun Teelab Local Brand Unisex Love Is In The Air TS199",
            sale: "199.000đ",
            root: "350.000đ",
            isActive: false,
          },
          {
            image: "shirt6.webp",
            otherImage: "shirt6-r.webp",
            info: "Áo Thun Teelab Local Brand Unisex The Eyes T-Shirt TS206",
            sale: "10.000đ",
            root: "210.000đ",
            isActive: false,
          },
        ],
        title: "Áo Polo",
      };
    },
    template: `
      
  <div class="title_products_content">
      <h1>{{title}}</h1>
  </div>
  <div class="products_content_chil">
      <div class="product_content" v-for="product in products">
          <img v-if="product.isActive" v-bind:src="'/shirts/' + product.otherImage" @mouseover="product.isActive = !product.isActive" alt="{{product.image}}">
          <img v-else v-bind:src="'/shirts/' + product.image" @mouseover="product.isActive = !product.isActive" alt="{{product.image}}">
          <button><img v-bind:src="'/shirts/' + product.image" alt=""></button>
          <p class="info_product">{{product.info}}</p>
          <div class="price_product">
              <p class="sale_product">{{product.sale}}</p>
              <del class="root_product">{{product.root}}</del>
          </div>
      </div>
  </div>
      
      `,
  }).mount(".products_content_1");







  const products_content_2 = Vue.createApp({
    data() {
      return {
        products: [
          {
            image: "shirt3.webp",
            otherImage: "shirt3-r.webp",
            info: "Áo Babytee Local Brand Teelab Studio Baby Sheep Cute BT013",
            sale: "150.000đ",
            root: "250.000đ",
            isActive: false,
          },
          {
            image: "shirt6.webp",
            otherImage: "shirt6-r.webp",
            info: "Áo Thun Teelab Local Brand Unisex Love Is In The Air TS199",
            sale: "199.000đ",
            root: "350.000đ",
            isActive: false,
          },
          {
            image: "shirt5.webp",
            otherImage: "shirt5-r.webp",
            info: "Áo Thun Teelab Local Brand Unisex The Eyes T-Shirt TS206",
            sale: "10.000đ",
            root: "210.000đ",
            isActive: false,
          },
        ],
        title: "Áo Jacket",
      };
    },
    template: `
      
  <div class="title_products_content">
      <h1>{{title}}</h1>
  </div>
  <div class="products_content_chil">
      <div class="product_content" v-for="product in products">
          <img v-if="product.isActive" v-bind:src="'/shirts/' + product.otherImage" @mouseover="product.isActive = !product.isActive" alt="{{product.image}}">
          <img v-else v-bind:src="'/shirts/' + product.image" @mouseover="product.isActive = !product.isActive" alt="{{product.image}}">
          <button><img v-bind:src="'/shirts/' + product.image" alt=""></button>
          <p class="info_product">{{product.info}}</p>
          <div class="price_product">
              <p class="sale_product">{{product.sale}}</p>
              <del class="root_product">{{product.root}}</del>
          </div>
      </div>
  </div>
      
      `,
  }).mount(".products_content_2");