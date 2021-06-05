const HeaderMenu = {

  props:['order', 'info'],

  data(){
    return{
      OrdersLink:this.order,
      InfoLink:this.info,
    }
  },

  template:`
    <section class="header-menu">
      <a :href="this.OrdersLink">Orders</a>
      <a :href="this.InfoLink">Info</a>
    </section>
  `
} 