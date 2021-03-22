# azure-function-nodejs-hello
a simple [Azure function](https://docs.microsoft.com/en-us/azure/azure-functions/) or serverless computing, using nodejs

Some links of interest :
+ [Azure CLI documentation](https://docs.microsoft.com/en-us/cli/azure/)
+ [Azure Functions JavaScript developer guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node?tabs=v2)
+ [How to enforce HTTPS](https://docs.microsoft.com/en-us/azure/app-service/configure-ssl-bindings#enforce-https)
+ [Azure SDK Latest Releases](https://azure.github.io/azure-sdk/releases/latest/js.html)
+ [Get started guide for Azure developers](https://docs.microsoft.com/en-us/azure/guides/developer/azure-developer-guide)


### using Azure Functions Core Tools
you can create a new functions project by running :
  func init

this wil create a skeleton azure functions :

*host.json* stores runtime configuration values, such as logging options, for the function app. The settings stored in this file are used both when running functions locally and in Azure.

*local.settings.json* stores configuration values that only apply to the function app when it is run locally with the Core Tools. This file contains two kinds of settings: local runtime settings, used to configure the local functions runtime itself, and custom application settings, which you can add and configure based on your app's needs and can be accessed and used by all the functions in the app.

after that, you can create new function with :
  func new
