import {Locator, Page, expect } from "@playwright/test"
import { BasePage } from "./Basepage"

export class HrmLogin extends BasePage{
    //HrmLogin - this above name can be anything. not nessesay to be the same as file name.
     
    constructor(page:Page){
        super(page)
    }

    //locator
    userName:Locator = this.page.locator('input#username');
    password: Locator = this.page.locator('#password');
    signInButton:Locator = this.page.locator('#signInBtn');

    //Method
    public async launch_Url(){
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    }
    
    public async IronMan()
    {
        await this.userName.fill("rahulshettyacademy");
        await this.password.fill('Learning@830$3mK2');
        await this.signInButton.click();
    }
};




// //Locators
//     readonly userName: Locator;
//     readonly Password: Locator;
//     readonly signInButton: Locator;


// constructor (page: Page)
//     {
//         this.page = page
//     //locator
//     userName: this.page.locator('input#username');
//     password: this.page.locator('#password');
//     signInButton: this.page.locator('#signInBtn');
//     }

//     async ValidLogin()
//     {
//         await this.userName.fill("rahulshettyacademy");
//         await this.Password .fill('Learning@830$3mK2');
//         await this.signInButton.click();
//     }



