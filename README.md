# Portfolio Website

A open source repo of portfolio website, where user can customise the website just by updating their data in JSON file.

## Steps to Get Your Awesome JSON Portfolio

1. **Fork the Repository**

   - Fork this repository to your GitHub account.

2. **Enable GitHub Pages (Using Actions)**

   - Utilize GitHub Actions to enable GitHub Pages for your forked repository.

3. **Update Your Details in JSON File**

   - Open the `public/data/profile.json` file and update it with your portfolio details.
   - To correctly update your details in the profile.json file, refer to the below [tables](JSON-Structure) for guidance on the available JSON fields and also take help from example.

4. **Upload Media Files**

   - If you do not have hosted media files, upload them to the public folder in your repository. This folder is designated for storing static assets such as images and videos. Ensure that your media files are appropriately placed within this folder for them to be accessible and displayed on your portfolio website.

5. **Automatic Deployment**
   - Any updates made to the `main` branch of your repository will automatically trigger a deployment of the site.

### Note:

The easy portfolio generation and removal of these manual steps are coming soon. You will simply have to fill in the data, upload the file, and with a single click, your awesome portfolio will be ready. Stay tuned for updates!

## JSON-Structure

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
      <th>Required</th>
      <th>Possible values</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>appName</td>
      <td>Name of the application</td>
      <td>Yes</td>
      <td>Any String</td>
      <td>"Raj's Portfolio"</td>
    </tr>
    <tr>
      <td>options.darkMode</td>
      <td>Enable Toggler for dark mode: default mode will be as per users device setting</td>
      <td>No</td>
      <td>true / false [Default: true]</td>
      <td>true</td>
    </tr>
    <tr>
      <td>options.theme</td>
      <td>Theme of the application : use "custom" for your custom theme or use preset themes</td>
      <td>No</td>
      <td>"custom", "default", "blueberry", "coconut", "dragonfruit", "grape", "kiwi", "mango", "pear", "pineapple", "plum", "tangerine", "rambutan"</td>
      <td>"coconut"</td>
    </tr>
    <tr>
      <td>theme</td>
      <td>Custom Theme</td>
      <td>No</td>
      <td>JSON Object with structure as in example. <br/>Font value:

[Any Google Fonts](https://fonts.google.com/)</td>

<td>

```json
{
  "default": {
    "primaryTextColor": "#ffffff",
    "secondaryTextColor": "#707070",
    "primaryBackgroundColor": "#ffffff",
    "secondaryBackgroundColor": "#fafafa",
    "accentColor": "#ff6347",
    "accentSecondaryColor": "#ffa07a",
    "brandColor": "#ffffff",
    "fontFamily": "Roboto"
  },
  "dark": {
    "primaryTextColor": "#ffffff",
    "secondaryTextColor": "#a0a0a0",
    "primaryBackgroundColor": "#000000",
    "secondaryBackgroundColor": "#202020",
    "accentColor": "#505050",
    "accentSecondaryColor": "#050505",
    "brandColor": "#ffffff",
    "fontFamily": "Roboto"
  }
}
```

  </td>
    </tr>
    <tr>
      <td>brand.name</td>
      <td>Brand Name: will be render at Header of Page</td>
      <td>No | but recommended to set atleast one of name or image</td>
      <td>Any String</td>
      <td>"Raj"</td>
    </tr>
    <tr>
      <td>brand.image</td>
      <td>Brand Logo: will be render at Header of Page</td>
      <td>No | but recommended to set atlease one of name or image</td>
      <td>Path of image: Can be absolute or relative(Just upload image in public folder of repo)</td>
      <td>"/images/raj.png"</td>
    </tr>
    <tr>
      <td>meta</td>
      <td>meta data for your app</td>
      <td>No</td>
      <td>JSON Object</td>
      <td>

[See Meta Structure](#Meta-Structure)</td>

  </tr>
    <tr>
      <td>sections</td>
      <td>Array of sections in the application</td>
      <td>No</td>
      <td>Array of Objects</td>
      <td>

[See individual Section Structure](#Sections-Structure)</td>

  </tr>
    <tr>
      <td>footer</td>
      <td>Footer section of the application</td>
      <td>No</td>
      <td>JSON Object</td>
      <td>

[See Footer Structure](#Footer-Structure)</td>

  </tr>

  </tbody>
</table>

### Meta-Structure

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
      <th>Required</th>
      <th>Possible values</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>Title to be seen on Browser's tab</td>
      <td>No (but recommended)</td>
      <td>Any String</td>
      <td>"Raj's Portfolio"</td>
    </tr>
    <tr>
      <td>description</td>
      <td>Description of website (will be added in meta tags)</td>
      <td>No (but recommended)</td>
      <td>Any String</td>
      <td>"Portfolio of Full Stack Developer - Raj"</td>
    </tr>
    <tr>
      <td>creator</td>
      <td>creator of website (will be added in meta tags)</td>
      <td>No (but recommended)</td>
      <td>Any String (Your Name)</td>
      <td>"Raj"</td>
    </tr>
    <tr>
      <td>keywords</td>
      <td>keywords of website to improve SEO (will be added in meta tags)</td>
      <td>No (but recommended)</td>
      <td>Array of String</td>
      <td>["Raj", "Developer", "Software Developer", "Full Stack Developer"]</td>
    </tr>
    <tr>
      <td>icons</td>
      <td>Icons of website (will be added in head for fevicon for different devices)</td>
      <td>No (but recommended)</td>
      <td>JSON Object</td>
      <td>

```json
{
  "icon": "https://placehold.co/60x60/ff6347/white/png?text=R",
  "shortcut": "/shortcut-icon.png",
  "apple": "/apple-icon.png",
  "other": {
    "rel": "apple-touch-icon-precomposed",
    "url": "/apple-touch-icon-precomposed.png"
  }
}
```

  </td>
    </tr>
    <tr>
      <td>robots</td>
      <td>Robots configuration of website (will be added in meta tags)</td>
      <td>No (but recommended)</td>
      <td>JSON Object</td>
      <td>

```json
{
  "index": false,
  "follow": true,
  "nocache": true,
  "googleBot": {
    "index": true,
    "follow": false,
    "noimageindex": true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1
  }
}
```

  </td>
    </tr>

  </tbody>
</table>

### Sections-Structure

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
      <th>Required</th>
      <th>Possible values</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>Name of the section. Will be render in Nav bar and will use for navigation.</td>
      <td>Yes</td>
      <td>Any String (Preferable in `Kebab` case)</td>
      <td>"home"</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Type of the section. "home" is special section type with background image</td>
      <td>Yes</td>
      <td>home / default</td>
      <td>"home"</td>
    </tr>
    <tr>
      <td>columns</td>
      <td>This attribute determines the number of columns in which a section should be split.</td>
      <td>No (default is 1)</td>
      <td>1 or 2</td>
      <td>1</td>
    </tr>
    <tr>
      <td>heading</td>
      <td>Heading of the section. Will be render on top of section.</td>
      <td>No</td>
      <td>String (HTML) Note: classes mentioned in theme section will be available for styling.</td>
      <td>"About Me"</td>
    </tr>
    <tr>
      <td>description</td>
      <td>Description of the section. Will be render on top of section.</td>
      <td>No</td>
      <td>String (HTML) Note: classes mentioned in theme section will be available for styling.</td>
      <td>"Know more about me..."</td>
    </tr>
    <tr>
      <td>subsections</td>
      <td>subsections of the section.</td>
      <td>No</td>
      <td>Array of Objects</td>
      <td>

[See individual Subsection Structure](#Subsection-Structure)</td>

  </td>
    </tr>

  </tbody>
</table>

### Subsection-Structure

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
      <th>Required</th>
      <th>Possible values</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>Name of the subsection.</td>
      <td>Yes</td>
      <td>Any String (Preferable in `Kebab` case)</td>
      <td>"project-1"</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Type of the section.</td>
      <td>Yes</td>
      <td>"default", "media-item", "hr</td>
      <td>"default"</td>
    </tr>
    <tr>
      <td>heading</td>
      <td>Heading of the subsection. (Not available if type: "hr")</td>
      <td>No</td>
      <td>String (HTML) Note: classes mentioned in theme section will be available for styling.</td>
      <td>"About Me"</td>
    </tr>
    <tr>
      <td>content</td>
      <td>Content of the subsection. (Not available if type: "hr")</td>
      <td>No</td>
      <td>String (HTML) Note: classes mentioned in theme section will be available for styling.</td>
      <td>"Know more about me..."</td>
    </tr>
    <tr>
      <td>badges</td>
      <td>Badges component. (Not available if type: "hr")</td>
      <td>No</td>
      <td>Array of Strings</td>
      <td>["HTML", "CSS", "JavaScript"]</td>
    </tr>
    <tr>
      <td>buttons</td>
      <td>Buttons component. (Not available if type: "hr")</td>
      <td>No</td>
      <td>Array of objects containing button text and link.</td>
      <td>

```json
[
  {
    "text": "Visit",
    "link": "https://www.codechefclone.example"
  }
]
```

  </td>
    </tr>
    <tr>
      <td>mediaDetails</td>
      <td>Media component. (only available if type: "media-item")</td>
      <td>No</td>
      <td>Object containing media type and src(string for video and image, array for image-slide).</td>
      <td>

```json
{
  "type": "image-slide", // possible values: image, video, image-slide
  "src": [
    "images/healthify_1.svg",
    "images/healthify_2.svg",
    "images/healthify_3.svg"
  ]
}
```

  </td>
    </tr>
    <tr>
      <td>onlyMedia</td>
      <td>Boolean to identify if there is media only and no content. (only available if type: "media-item")</td>
      <td>No</td>
      <td>true, false (default: false)</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

### Footer-Structure

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
      <th>Required</th>
      <th>Possible values</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>heading</td>
      <td>Heading of the footer</td>
      <td>Yes</td>
      <td>String</td>
      <td>"Raj"</td>
    </tr>
    <tr>
      <td>content</td>
      <td>Content of the footer</td>
      <td>Yes</td>
      <td>String (HTML) Note: classes mentioned in theme section will be available for styling.</td>
      <td>
        "&lt;p&gt;Let's collaborate and bring your ideas to life!&lt;/p&gt;"
      </td>
    </tr>
    <tr>
      <td>socials</td>
      <td>Your socials links</td>
      <td>No</td>
      <td>Array of Objects (icon should be the classes given by fontawesome)</td>
      <td>

```json
[
  {
    "name": "Linkedin",
    "icon": "fa-brands fa-linkedin-in",
    "link": "https://www.linkedin.com/in/raj-example"
  },
  {
    "name": "Github",
    "icon": "fa-brands fa-github",
    "link": "https://github.com/raj-example"
  },
  {
    "name": "Mail ID",
    "icon": "fa-solid fa-envelope",
    "link": "mailto:raj@example.com"
  }
]
```

  </td>
    </tr>
  </tbody>
</table>

## JSON Example

```json
{
  "appName": "Raj's Portfolio",
  "options": {
    "darkMode": true,
    "theme": "custom"
  },
  "theme": {
    "default": {
      "primaryTextColor": "#ffffff",
      "secondaryTextColor": "#707070",
      "primaryBackgroundColor": "#ffffff",
      "secondaryBackgroundColor": "#fafafa",
      "accentColor": "#ff6347",
      "accentSecondaryColor": "#ffa07a",
      "brandColor": "#ffffff",
      "fontFamily": "Roboto"
    },
    "dark": {
      "primaryTextColor": "#ffffff",
      "secondaryTextColor": "#a0a0a0",
      "primaryBackgroundColor": "#000000",
      "secondaryBackgroundColor": "#202020",
      "accentColor": "#505050",
      "accentSecondaryColor": "#050505",
      "brandColor": "#ffffff",
      "fontFamily": "Roboto"
    }
  },
  "meta": {
    "title": "Raj's Portfolio",
    "description": "Portfolio of Full Stack Developer - Raj",
    "creator": "Raj",
    "keywords": [
      "Raj",
      "Developer",
      "Software Developer",
      "Full Stack Developer"
    ],
    "icons": {
      "icon": "https://placehold.co/60x60/ff6347/white/png?text=R"
    },
    "robots": {
      "index": true,
      "follow": true
    }
  },
  "brand": {
    "name": "Raj"
  },
  "sections": [
    {
      "name": "home",
      "type": "home",
      "columns": 1,
      "heading": "Hey, I'm <span class='accent-text'>Raj</span>",
      "description": "I develop innovative software solutions and thrive on turning ideas into reality.",
      "buttons": [
        {
          "text": "Projects",
          "link": "#projects"
        },
        {
          "text": "Contact Me",
          "link": "mailto:raj@example.com"
        }
      ]
    },
    {
      "name": "about-me",
      "type": "default",
      "columns": 2,
      "heading": "About Me",
      "description": "Get to know me better and explore my skills and experience.",
      "subsections": [
        {
          "name": "about-me",
          "type": "default",
          "heading": "More about me...",
          "content": "<p>I'm a passionate Full Stack Developer with a focus on creating scalable and efficient web applications. I enjoy working with cutting-edge technologies to solve complex problems and deliver exceptional user experiences.</p><br><p>Currently, I'm seeking exciting opportunities to contribute my skills and expertise to innovative projects. Let's connect and build something amazing together!</p>"
        },
        {
          "name": "skills",
          "type": "default",
          "heading": "Skills",
          "badges": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "Python",
            "Django",
            "RESTful APIs",
            "Git",
            "Responsive Design",
            "Problem Solving"
          ]
        }
      ]
    },
    {
      "name": "projects",
      "type": "default",
      "columns": 1,
      "heading": "Projects",
      "description": "Explore some of my recent projects.",
      "subsections": [
        {
          "name": "project1",
          "type": "media-item",
          "heading": "EcoMarket",
          "mediaDetails": {
            "type": "video",
            "src": "videos/placeholder.webm"
          },
          "content": "An e-commerce platform for sustainable products. Users can browse, purchase, and review eco-friendly items.",
          "badges": [
            "React",
            "Node.js",
            "MongoDB",
            "Express.js",
            "RESTful API"
          ],
          "buttons": [
            {
              "text": "Visit",
              "link": "https://www.ecomarket.example"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "name": "project2",
          "type": "media-item",
          "heading": "Healthify",
          "mediaDetails": {
            "type": "image-slide",
            "src": [
              "images/healthify_1.svg",
              "images/healthify_2.svg",
              "images/healthify_3.svg"
            ]
          },
          "content": "A health and fitness tracking application. Users can set goals, track progress, and receive personalized recommendations.",
          "badges": ["React", "Redux", "Firebase", "Material-UI"],
          "buttons": [
            {
              "text": "Visit",
              "link": "https://www.healthify.example"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "name": "project3",
          "type": "media-item",
          "heading": "CodeChef Clone",
          "mediaDetails": {
            "type": "image-slide",
            "src": [
              "https://placehold.co/1366X768/EED/31343C?font=montserrat&text=CodeChef Clone | Dummy Image 1",
              "https://placehold.co/1366X768/EDE/31343C?font=montserrat&text=CodeChef Clone | Dummy Image 2",
              "https://placehold.co/1366X768/EDD/31343C?font=montserrat&text=CodeChef Clone | Dummy Image 3",
              "https://placehold.co/1366X768/DEE/31343C?font=montserrat&text=CodeChef Clone | Dummy Image 4"
            ]
          },
          "content": "A platform for competitive programming enthusiasts. Users can solve challenges, participate in contests, and track their progress.",
          "badges": ["React", "Node.js", "MongoDB", "Express.js"],
          "buttons": [
            {
              "text": "Visit",
              "link": "https://www.codechefclone.example"
            }
          ]
        }
      ]
    }
  ],
  "footer": {
    "heading": "Raj",
    "content": "<p>Let's collaborate and bring your ideas to life!</p>",
    "socials": [
      {
        "name": "Linkedin",
        "icon": "fa-brands fa-linkedin-in",
        "link": "https://www.linkedin.com/in/raj-example"
      },
      {
        "name": "Github",
        "icon": "fa-brands fa-github",
        "link": "https://github.com/raj-example"
      },
      {
        "name": "Mail ID",
        "icon": "fa-solid fa-envelope",
        "link": "mailto:raj@example.com"
      }
    ]
  }
}
```
