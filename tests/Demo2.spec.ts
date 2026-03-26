import{test, expect} from '@playwright/test';
import { demo2loginpage } from '../Pages/demo2LoginPage';

test ('abhijit', async ({page}) =>
{
const loginPage:demo2loginpage = new demo2loginpage(page);
   await loginPage.launch_URL();
   await loginPage.loginMethod();
   await page.pause();
   await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');

}
);
























// import {test, expect} from '@playwright/test'
// import { demo2loginpage } from '../Pages/demo2LoginPage'


// test ('demo2', async ({page}) => 
// {
// const loginpage: demo2loginpage = new demo2loginpage(page)
// await loginpage.launch_Url();
// await loginpage.loginMethod();

//    // await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
//    // await page.locator("#userEmail").fill("shahanea117@gmail.com");
//    // await page.locator("#userPassword").fill("Priya@2018");
//    // await page.locator("input#login").click();
   
// });

