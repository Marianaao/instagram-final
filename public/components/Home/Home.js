import "../index.js";
export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/styles.css"/>
        <my-header username="andresrojassshere"> </my-header>
            <section class="main"> 
                <div class="container">
                    <div class="left_column">
                    <my-histories 
                    userpic="./images/histories/Xavier_profile.png",
                    username="XAVIERThorpe"
                > </my-histories>
                <my-histories 
                    userpic="./images/histories/merlina_profile.png",
                    username="666Addams"
                > </my-histories>
                <my-histories 
                  userpic="./images/histories/Xavier_profile.png",
                    username="XAVIERThorpe"
                > </my-histories>
                <my-histories 
                userpic="./images/histories/merlina_profile.png",
                username="666Addams"
                > </my-histories>
                <my-histories 
                userpic="./images/histories/Xavier_profile.png",
                username="XAVIERThorpe"
                > </my-histories>
                <my-histories 
                userpic="./images/histories/merlina_profile.png",
                username="666Addams"
                > </my-histories>
                <my-histories 
                userpic="./images/histories/Xavier_profile.png",
                username="XAVIERThorpe"
                > </my-histories>
                <my-histories 
                userpic="./images/histories/merlina_profile.png",
                username="666Addams"
                > </my-histories>
                        </div>
                    </div>

                    <div class="right_column">
                        <p class="suggestions">Suggestions For You</p>
                        <my-suggestion  
                        suggestionusername = "bianca_07" 
                        suggestionfollowtoo="juandavid_g and 12 others"
                        suggestionuserpic="./images/suggestions/profile1.png"
                    > </my-suggestion>
                    <my-suggestion  
                        suggestionusername = "EnidPink" 
                        suggestionfollowtoo="juandavid_g and 12 others"
                        suggestionuserpic="./images/suggestions/profile2.png"
                    > </my-suggestion>
                    <my-suggestion  
                    suggestionusername = "bianca_07" 
                    suggestionfollowtoo="juandavid_g and 12 others"
                    suggestionuserpic="./images/suggestions/profile1.png"
                    > </my-suggestion>
                    <my-suggestion  
                    suggestionusername = "EnidPink" 
                    suggestionfollowtoo="juandavid_g and 12 others"
                    suggestionuserpic="./images/suggestions/profile2.png"
                    > </my-suggestion>
                    <my-suggestion  
                    suggestionusername = "bianca_07" 
                    suggestionfollowtoo="juandavid_g and 12 others"
                    suggestionuserpic="./images/suggestions/profile1.png"
                    > </my-suggestion>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define("app-home", Home);
