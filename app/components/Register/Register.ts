import { addUser } from "../../services/db.js";

export class Register extends HTMLElement{

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
            addUser({email,password});
            alert ("Successful registration.")
            const event: CustomEvent = new CustomEvent("login-success",{
                composed: true
            })
            this.dispatchEvent(event);
        })
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./components/Register/Register.css">
        
        <section> 
                <div class="main">
                    <div class="container"> 
                        <div>
                            <img src="images/register/instagram_logo.png"  class="instagram_logo">
                            <p class="text1">Sign up to see photos and videos from your friends.</p>
                            <button class="facebook-button">Log in with Facebook</button>
                            <p class="or"> ────── OR ────── </p>
                        </div>
                        <div> 
                        <app-form></app-form>
                        </div>
                        <div class="text2">
                            <p>People who use our service may have uploaded your contact information to Instagram. <b>Learn More</b></p>
                            <p>By signing up, you agree to our <b>Terms , Privacy Policy and Cookies Policy.</b></p>
                        </div>
                    </div>
                </div>
                <div class="main">
                    <div class="container">
                        <div class="login">
                            <p class="login-text">Have an account?</p>
                            <button class="login-bttn"> Log in</button>
                        </div>
                    </div>
                </div>
                    <div>
                        <p class="get_app"> Get the app. </p>
                    </div>
                    <div class="get">
                        <div>
                            <img src="images/register/getit.png" class="getit">
                        </div> 
                        <div>
                            <img src="images/register/getit2.png" class="getit2">
                        </div> 
                    </div>
            </section>
        `
    }
}

customElements.define("app-register",Register);