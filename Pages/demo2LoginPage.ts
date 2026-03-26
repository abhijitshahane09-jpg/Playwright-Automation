
import {Page, Locator, expect} from '@playwright/test'
import { BasePage } from './Basepage'

export class demo2loginpage extends BasePage
{
    constructor(page:Page)
    {
        super(page)
    }

    //locators
    userName:Locator = this.page.locator("#userEmail");
    password:Locator = this.page.locator("#userPassword");
    signInButton:Locator = this.page.locator("input#login");
    
    //Method
    public async launch_URL()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    }
    public async loginMethod()
    {
        await this.userName.fill("shahanea117@gmail.com");
        await this.password.fill("Priya@2018");
        await this.signInButton.click();
        await expect (this.page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');

    }
};

// import {Locator, Page, expect } from "@playwright/test"
// import { BasePage } from "./Basepage"

// export class HrmLogin extends BasePage{
//     //HrmLogin - this above name can be anything. not nessesay to be the same as file name.
     
//     constructor(page:Page){
//         super(page)
//     }

//     //locator
//     userName:Locator = this.page.locator('input#username');
//     password: Locator = this.page.locator('#password');
//     signInButton:Locator = this.page.locator('#signInBtn');

//     //Method
//     public async launch_Url(){
//         await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/')
//     }
    
//     public async IronMan()
//     {
//         await this.userName.fill("rahulshettyacademy");
//         await this.password.fill('Learning@830$3mK2');
//         await this.signInButton.click();
//     }
// };