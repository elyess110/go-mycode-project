
module.exports= ({title,price,date,seat,time,image}) => {
     const today = new Date();
     
 return `
 <style>
 body {
   font-family: 'Yanone Kaffeesatz', sans-serif;
   font-weight: 600;
 }
 img {
   width: 100%;
   height: 450px;
 }
 .ticket {
   width: 500px;
   height: 1000px;
   background: rgba( 255, 255, 255, 0.2 );
   box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
   backdrop-filter: blur( 20px );
   -webkit-backdrop-filter: blur( 20px );
   border-radius: 10px;
   border: 1px solid rgba( 255, 255, 255, 0.18 );  margin: 25px auto;
   margin: 25px auto;
   position: relative;
 }
 
 
 .holes-lower {
   position: relative;
   margin: 25px;
   border: 1px dashed #aaa;
 }
 
 
 .title {
   padding: 50px 25px 10px;
 }
 
 .info {
   padding: 15px 25px;
 }
 table {
   width: 100%;
   font-size: 18px;
   margin-bottom: 15px;
 }
 table tr {
   margin-bottom: 10px;
 }
 table th {
   text-align: left;
 }
 table th:nth-of-type(1) {
   width: 38%;
 }
 table th:nth-of-type(2) {
   width: 40%;
 }
 table th:nth-of-type(3) {
   width: 15%;
 }
 table td {
   width: 33%;
   font-size: 32px;
 }
 .bigger {
   font-size: 20px;
 }
 .serial {
   padding: 25px;
 }
 .serial table {
   border-collapse: collapse;
   margin: 0 auto;
 }
 .serial td {
   width: 3px;
   height: 50px;
 }
 .company-logo {
  font-family: cursive;
   font-size: 2.5rem;
   background: #b82828;
   background: radial-gradient(circle, #b82828 0%, rgba(255, 0, 0, 0.3142507003) 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   margin-left: 80px;
 }
 .numbers td {
   font-size: 16px;
   text-align: center;
 }
 .time{
  margin-left: 370px;
}
 </style>
 <div class="ticket">
 <div class="holes-top"></div>
 <div class="title">
    <tr>
       <div class='company-logo'>CRAZY cinema</div>
       <br/>
             <td>
                 Datum: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
             </td>
      </tr>
 </div>
 <div class="poster">
    <img src=${image} alt="Movie: img" />
 </div>
 <div class="info">
 <table>
           <tr>
              <th>MOVIE NAME:</th>
              <th>SEAT N:</th>
             
              
           </tr>
           <tr>
              <td class="bigger">${title}</td>
              <td class="bigger">${seat}</td>
              
             
           </tr>
        </table>
        <table>
            <tr>
                <th>PRICE:</th>
                <th>DATE:</th>
            </tr>
            <tr>
                <td class="bigger">${price}DT</td>
                <td class="bigger">${date}</td>
            </tr>
         </table>
         <table>
            <tr>
                <th>TIME:</th>
            </tr>
            <tr>
                <td class="bigger">${time}</td>
            </tr>
         </table>

 </div>
 <div class="holes-lower"></div>
 <div class="serial">
    <table class="barcode"><tr></tr></table>
    <table class="numbers">
       <tr>
          <td>9</td>
          <td>1</td>
          <td>7</td>
          <td>3</td>
          <td>7</td>
          <td>5</td>
          <td>4</td>
          <td>4</td>
          <td>4</td>
          <td>5</td>
          <td>4</td>
          <td>1</td>
          <td>4</td>
          <td>7</td>
          <td>8</td>
          <td>7</td>
          <td>3</td>
          <td>4</td>
          <td>1</td>
          <td>4</td>
          <td>5</td>
          <td>2</td>
       </tr>
    </table>
 </div>
</div>
     `;
 };