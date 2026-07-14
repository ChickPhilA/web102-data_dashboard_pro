# Web Development Project 6 - *Pubtopia Pro*

Submitted by: **Phillipe Manio**

This web app: **insert description**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [X] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [X] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset


The following **optional** features are implemented:

- [ ] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [ ] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

  
The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

https://youtu.be/K02hhFyYR44

## Notes

Describe any challenges encountered while building the app.

**The biggest challenge was figuring out the flow of dynamic routing. I struggled with this for a while, because I had to figure out how the ID of a brewery from the API was going to be implemented in a route, with it only being a single page. However, it finally clicked to me when I discovered that the data was already in front of us-- in the initial API call when the website first renders, the ID is already given to us as the key for every brewery in the table cell. The ID is passed to the Route when I wrapped the key in a Link element and that's when PubDetail.jsx gets the ID of the brewery through useParams(). I finally use the id stored in useParams() to make an API call to retrieve a single, individual brewery page. Once figuring out that the ID was always in the initial API call, my confusion was finally cleared.**

**Another challenge I had was figuring out how to strucutre my recharts data. Trying to figure out how to structure each data of the chart was not difficult, but rather understand what data it wants from the API call and how the chart wants the data packaged. I also didn't know that Object means that it's a key-value pair from a Map/Dictionary in JavaScript, so there was a bit of misconceptions at first due to assuming it meant a single, individual value.**

## License

    Copyright [2026] [Phillipe Manio]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.