## Must Have:
 - Use [json-server](https://github.com/typicode/json-server) to fetch data from db.json => done
 - Fetched data should be displayed in a table.=> done
 - Table should have pagination and option for user to change page-no and page-size. => done
 - The application must start => done
 - The application must be a single-page application (SPA) => done
 - The application must be divided into components => done
 - The file structure must be consistent and easy to follow => done

## Nice to have:
 - User should be able to sort data by clicking on any column and on clicking again should change the sort direaction. => done
 - User should be able to search through the table from a searchbox. => done

## Negative Points:
 - No componentization
 - Inline styles
 - No control over re-rendering (e.g. not using id for a list)
 - Bad naming
 - Direct DOM manipulation

## install dependency
yarn 


## first start server on 3000
json-server --watch db.json

## second start client on 3001
yarn start
