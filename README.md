# Angular Document Scanner

This project demonstrates how to build an Angular document scanner with [Dynamsoft Web Capture SDK](https://www.dynamsoft.com/web-twain/features/mobile-web-capture-sdk/).

## Development Environment

```bash
ng --version

Angular CLI: 13.3.7
Node: 16.13.1
Package Manager: npm 8.1.2
OS: win32 x64

Angular: 13.3.10
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1303.7
@angular-devkit/build-angular   13.3.7
@angular-devkit/core            13.3.7
@angular-devkit/schematics      13.3.7
@angular/cli                    13.3.7
@schematics/angular             13.3.7
ng-packagr                      13.3.1
rxjs                            7.5.5
typescript                      4.6.4

```

## Online Demo
[https://yushulx.me/angular-document-scanner/](https://yushulx.me/angular-document-scanner/)


## Usage
1. Apply for a [30-day free trial license](https://www.dynamsoft.com/customer/license/trialLicense?product=dwt) of Dynamic Web TWAIN.
2. Update the license key in `document-scanner.component.ts` file:
    
    ```typescript
    Dynamsoft.DWT.ProductKey = "LICENSE-KEY";
    ```
3. Install the dependencies:
    
    ```bash
    npm install
    ```

4. `HTTPS` is required for web camera access. Run the Angular application as follows:
    
    ```bash
    ng serve --ssl
    ```
    
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

