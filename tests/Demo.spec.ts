import { test, expect } from '@playwright/test'
import {HrmLogin} from '../Pages/HrmLogin'
import {Dashboard} from '../Pages/dashboradPage'
//always remember that whenever u call any class to perform action like now doshboad action - then in test file we need to initialize it first n that to in the top of the rtest file like import then u can call it
test('abhijit', async ({ page }) => {

const loginpage: HrmLogin = new HrmLogin(page) //we have creted a veriable in which we stored  HraamLogin page class file. that is why we are not using callss name but using veriable which is Loginpage.
const dashboard: Dashboard = new Dashboard(page)
   await loginpage.launch_Url()

   await loginpage.IronMan()   

   await dashboard.verifyDetails() //here whatever actions we have stored in side the verify details method will be executed.


});





   // const userName = page.locator('input#username');
   // const signIn = page.locator('#signInBtn');
   // const homeText = page.locator('ul li a')


//    console.log(await page.locator("[style*='block']").textContent());
//    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
//    //   await userName.fill("");
//    await userName.fill('rahulshettyacademy');
//    await page.locator('#password').fill('Learning@830$3mK2');
//    await signIn.click();
//    //   console.log(await page.locator('.div.ul.li.a').first().textContent());
//    console.log(await page.locator(".container li").first().textContent());
// });




// //   Learning@830$3mK2