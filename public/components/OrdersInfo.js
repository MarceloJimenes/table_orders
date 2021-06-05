const OrdersInfo = {

  data(){
    return{
      orders:[],
      tempFilter:[],
      filteredCountries:'ALL',
      filteredSellers:0,
    } 
  },

  //Consuming JSON
  created: function(){
    fetch('/json/orders.json')
    .then(response=>{
      response.json().then(json=>{
        this.orders = json;
      })
    })
  },


  computed: {
    filter() {
       
      if (this.filteredSellers!=0 && this.filteredCountries!='ALL'){

        this.tempFilter = this.orders.filter(x => x.seller == `Seller #${this.filteredSellers}`);
        return this.tempFilter.filter(x => x.country == this.filteredCountries);
        
      }else if (this.filteredCountries!='ALL' && this.filteredSellers==0){
        
        return this.orders.filter(x => x.country == this.filteredCountries);
        
      }else if (this.filteredSellers!=0 && this.filteredCountries=='ALL'){

        return this.orders.filter(x => x.seller == `Seller #${this.filteredSellers}`)
        
      }else{
        return this.orders
      }
      
    },
  },

  template:`
  <div class="container-item">
    <div>
      <h1>Orders</h1>
    </div>

    <div class="total-sellers">
      <div class="s1">
        <h5>Total Seller #1</h5>
        <h2>$9999.99</h2>
      </div>

      <div class="s2">
        <h5>Total Seller #2</h5>
        <h2>$9999.99</h2>
      </div>

      <div class="s3">
        <h5>Total Seller #3</h5>
        <h2>$9999.99</h2>
      </div>
    </div> 

    <div class="select-item">
      <select v-model="filteredSellers" class="form-select">
        <option value="0" >All Sellers</option>
        <option value="1">Seller #1</option>
        <option value="2">Seller #2</option>
        <option value="3">Seller #3</option>
      </select>

      <select v-model="filteredCountries" class="form-select">
        <option value="ALL">All Countries</option>
        <option value="ARG">Argentina</option>
        <option value="BRA">Brazil</option>
        <option value="MEX">Mexico</option>
      </select>
    </div>  

    <section class="table-items">
      <table class="table table-bordered">
        <tr>
          <th scope="col" class="th-order">OrderId</th>
          <th>Product</th>
          <th>Price</th>
          <th>Seller</th>
          <th>Country</th>
        </tr>
      
        <tr  v-for="order in filter">
          <td class="td-order">{{order.orderId}}</td>
          <td>{{order.product}}</td>
          <td>{{order.price}}</td>
          <td>{{order.seller}}</td>
          <td>{{order.country}}</td>
        </tr>
      </table>
    </section>    
  </div>

  `,
}