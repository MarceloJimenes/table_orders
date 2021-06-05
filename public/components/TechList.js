const TechList = {
  data(){
    return{
      techs:['PHP', 'Laravel', 'Vue.js', 'Bootstrap', ],
    }
  },

  template:`
    <div class="container">
      <h1>Info</h1>
      <h4>Marcelo Jimenes</h4>
      <p>This mini-project was created using:</p>
      <ul>
        <li v-for="tech in techs">
          {{tech}}
        </li>
      </ul>
    </div>
  
  `,

}