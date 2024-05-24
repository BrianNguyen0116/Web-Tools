# Web Tools - Web-Side jQuery Collection 

Purposed mainly for website applications such as e-commerce or inventory management using .NET framework (C#).
- [Search](#searchjs) - [.zip](https://github.com/BrianNguyen0116/Web-Tools/raw/master/src/search/_search.zip)
- [Filter (Checkbox)](#filterjs---checkbox) - [.zip](https://github.com/BrianNguyen0116/Web-Tools/raw/master/src/filter-radio/_filter.zip)
- [Filter (Radio Button)](#filterjs---radio-button) - [.zip](https://github.com/BrianNguyen0116/Web-Tools/raw/master/src/filter-checkbox/_filter.zip)

Modules are stored as partials to be integrated onto projects through the /View/Shared folder.
___
## __Search.js__

### Overview

Have the user input keywords and filter out items from their view that contains the keyword.

`Not case-sensitive` `jQuery Core 3.7.1` `Partial match`
### Usage
Assign a input-type element's name to "search" and oninput to "Search()" and have the target elements to include the class "target". 

Provides a search and loading icon. Assigning the id "search-icon" to the respective container will integrate visual functionality.

[Directory](https://github.com/BrianNguyen0116/Web-Tools/tree/master/src/search)
___ 
## __Filter.js - Checkbox__

### Overview

Have the user check off boxes and filter out items from their view that is assigned respectively.

`Exact match` `jQuery Core 3.7.1`
### Usage
Assign a input-type element's class to "chk", onchange to "Filter()" and have the target elements to include the class "target". 

[Directory](https://github.com/BrianNguyen0116/Web-Tools/tree/master/src/filter-checkbox)
___
## __Filter.js - Radio Button__ 

### Overview

Have the user select individual options and filter out items from their view that is assigned respectively.

`Exact match` `jQuery Core 3.7.1`
### Usage
Assign a input-type element's class to "rb", oninput to "Filter()" and have the target elements to include the class "target". 

[Directory](https://github.com/BrianNguyen0116/Web-Tools/tree/master/src/filter-radio)
___
