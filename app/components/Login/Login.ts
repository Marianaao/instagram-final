import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({email,password}).then(value => {
                if(value){
                    const event: CustomEvent = new CustomEvent("login-success",{
                        composed: true
                    })
                    this.dispatchEvent(event);
                }else{
                    alert("Username and Password do not match.");
                }
            })
        })
    }
    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./components/Login/login.css">         
        <section> 
        <div class="organizar">
                <div>
                <img src="images/login/iphone14.png"  class="iphone"> 
                </div>
                
                <section class="containers"> 
                    <div class="container">
                            <div> 
                            <img src="images/login/instagram_logo.png"  class="instagram_logo">
                            <app-form></app-form>
                                <p class="or"> ────── OR ────── </p>
                                
                                <div class="log_facebook">
                                <div>
                                <img src="images/login/facebook_logo.png" class="icon">
                                </div> 
                                <div>
                                <p class="facebook"> Facebook </p>
                                </div>
                                </div>
                                <div>
                                <p class="forgot_password" > Forgot password? </p> 
                                </div>

                            </div>
                    </div>
                    <div class="container2">
                        <div>
                        <p class="not_account"> Don't have an account?</p>
                        </div>
                        <div>
                        <p class="sing_up" > Sign up </p>
                        </div>
                    </div>
                    <div>
                        <p class="get_app"> Get the app. </p>
                    </div>
                    <div class="get">
                        <div>
                        <img src="images/login/getit.png" class="getit">
                        </div> 
                        <div>
                        <img src="images/login/getit2.png" class="getit2">
                        </div> 
                    </div>                  
                </section>
        </div>
        </section>
        `
    }
}

customElements.define("app-login",Login);