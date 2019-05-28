<template>
    <div class="activation-app">
      <div>
           <h1>WELCOME TO <span>aLPHA</span></h1>
           <p>Please fill the form below to start the process of activating your account</p>
      </div>
      <div>
          <form action="" method="POST">
              <div>
                 <label for="date of birth">Date of Birth:
                  <label for="date">DD: 
                      <select name="date" id="date" required>
                          <option value="">date</option>
                          <option value="01">01</option>
                          <option value="01">02</option>
                           <option value="03">03</option>
                            <option value="04">04</option>
                             <option value="05">05</option>
                              <option value="06">06</option>
                               <option value="07">07</option>
                                <option value="08">08</option>
                                 <option value="09">09</option>
                                  <option value="10">10</option>
                                   <option value="11">12</option>
                                    <option value="13">13</option>
                                     <option value="14">14</option>
                                      <option value="15">15</option>
                                       <option value="16">16</option>
                                        <option value="17">17</option>
                                         <option value="18">18</option>
                                          <option value="19">20</option>
                                           <option value="21">21</option>
                                            <option value="22">22</option>
                                             <option value="23">23</option>
                                              <option value="24">24</option>
                                               <option value="25">25</option>
                                                <option value="26">26</option>
                                                 <option value="27">27</option>
                                                  <option value="28">28</option>
                                                   <option value="29">29</option>
                                                    <option value="30">30</option>
                                                     <option value="31">31</option>
                      </select>
                </label>

                <label for="month">MM: 
                    <select name="month" id="month" required>
                        <option value="">Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </label>
                  <label for="year">YY: 
                   <select name="year" id="year" required>
                       <option value="">Year</option>
                        <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                   </select>
                </label>
              </label>
              </div>

              
              <div>
                  <label for="gender">Gender:
                      <label for="male">Male <input type="radio" name="gender" id="male" required></label>
                      <label for="female">Female <input type="radio" name="gender" id="female" required></label>
                  </label>
              </div>
             
                  Address
              
              <div>
                      <textarea name="address" id="address" cols="40" rows="5" placeholder="Address"></textarea>
              </div>
              <div>
                   <label for="work-status">Work status: 
                       <select name="workStatus" id="work" required>
                           <option value="">Please Select</option>
                           <option value="Employed">Employed</option>
                           <option value="Self-employed">Self-employed</option>
                           <option value="student">Student</option>
                           <option value="others">Others</option>
                       </select>
                   </label>
              </div>
              <div>
                  <label for="occupation">Occupation: 
                      <input type="text" name="occupation" id="occupation" required>
                  </label>
              </div>
              <div>
                  <label for="Next of kin">Next of Kin: 
                      <input type="text" name="next" required>
                  </label>
              </div>
              <div>
                   <label for="kin contact">
                      Next of Kin Contact: 
                      <input type="number" name="contact" required>
                  </label>
              </div>
              <div>
                  <label for="nationality">Nationality: 
                      <select name="nationality" id="nation" required>
                          <option value="Algeria">Algeria</option>
                      </select>
                  </label>
              </div>
              <div>
                  <label for="terms"><input type="checkbox" name="terms" id="agree" required> I agree to the terms and conditions of this agreement</label>
              </div>
              <div>
                  <label for="confidentiality">
                      <input type="checkbox" name="confident" id="swear" required> 
                      I hereby confirm that the above information has been provided to the best of my knowledge
                  </label>
              </div>
              <div>
                  <button>Submit</button>
              </div>
          </form>
      </div>

    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
.activation-app{
    text-align:start;
    margin:5%;
    padding:1rem;
    background:#fff;
    border-radius: 5px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.06), 0 1px 0 0 rgba(0,0,0,.02);
}

span{
    font-family:'Pacifico', cursive;
}
p{
    margin-top:2rem;
    padding-bottom: 1rem;
    border-bottom:2px solid #eee;
}
div{
    margin-bottom:2rem;
}
 input[type=text],input[type=number],#nation,select{
    border-radius:5px;
    border:1px solid #e3e3e3;
    font-size: 14px;
    padding: .375rem .75rem;
    background: #e9ecef;
 }
input[type=text],input[type="number"],#nation{
    height:30px;
}
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
textarea{
      border-radius:5px;
}
label{
    margin-left: 10px;
}
button{
    padding:0.7rem 1.7rem;
    width:30%;
}

@media screen and (max-width:600px){
    h1{
        font-size:20px;
    }
textarea{
 width:100%;
 }
 button{
     width:90%;
     padding:1rem 1.6rem;
 }
 label{
     display: block;
     margin-bottom: 7px;
 }
 select{
     width:80%;
 }
}
</style>


