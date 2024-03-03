#Portfolio Website
A open source repo of portfolio website, where user can customise the website just by updating their data in JSON file.

JSON Structure:-

- theme
  - primaryColor
  - secondaryColor
  - font
- meta
  - title
  - description
  - creator
  - keywords // arrays
  - icons
  - robots
- nav
  - image
  - name
- sections //array
  - name
  - type
  - columns
    - Possible Values: 1, 2
    - Default: 1
  - heading
  - description
  - buttons
  - subsections //array
    - name
    - type
    - columns
      - Possible Values: 1, 2
      - Default: 1
    - heading
    - description
    - buttons
    - other fields depend on type
- footer
- socialSidebar

JSON Example:-

```json
{
  "theme": {
    "primaryColor": "",
    "secondaryColor": "",
    "font": "Roberto"
  },
  "meta": {
    "title": "Anmol Agrawal's Portfolio",
    "description": "Portfolio of Full Stack Developer - Anmol Agrawal",
    "keywords": [
      "Anmol",
      "Anmol Agrawal",
      "Developer",
      "Software Developer",
      "Full Stack Developer"
    ],
    "icons": {
      "icon": "https://placehold.co/60x60/A5DD9B/white/png?text=AA",
      "shortcut": "/shortcut-icon.png",
      "apple": "/apple-icon.png",
      "other": {
        "rel": "apple-touch-icon-precomposed",
        "url": "/apple-touch-icon-precomposed.png"
      }
    },
    "robots": {
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
  },
  "nav": {
    "image": "",
    "name": "Anmol Agrawal"
  },
  "sections": [
    {
      "name": "home",
      "type": "home",
      "columns": 1,
      "heading": "Hey, I'm Anmol Agrawal",
      "description": "In non sunt nulla voluptate ut do eiusmod et nostrud consequat proident deserunt excepteur.",
      "buttons": [
        {
          "text": "Projects",
          "link": ""
        }
      ]
    },
    {
      "name": "about-me",
      "type": "default",
      "columns": 2,
      "heading": "About Me",
      "description": "Consequat veniam et reprehenderit in in non. Non ipsum elit dolor cupidatat laborum esse aute irure exercitation nisi. Do velit culpa in occaecat anim ut id eu sit. Ad quis duis commodo in veniam nostrud cupidatat id sunt.",
      "subsections": [
        {
          "name": "about-me",
          "type": "paragraph",
          "columns": 1,
          "heading": "More about me...",
          "content": "Laborum reprehenderit cillum culpa enim officia ut magna sunt eiusmod ad excepteur quis laboris. Consequat duis ea commodo occaecat sunt commodo mollit. Dolor ipsum proident eu ullamco eu Lorem aliqua. \nExercitation enim proident duis aliqua commodo nulla elit nostrud ea ex aliqua. Eiusmod voluptate do nostrud proident duis proident non do esse non nulla. Consectetur in excepteur ad adipisicing. Dolore id velit elit qui enim occaecat. Nostrud nulla eu eiusmod veniam anim pariatur culpa mollit labore. \nExcepteur dolore sit ex consectetur consectetur ea qui ut irure consequat in do est. Cupidatat aliqua velit qui laborum officia. Nulla esse laborum minim voluptate."
        },
        {
          "name": "skills",
          "type": "badges",
          "columns": 1,
          "heading": "Skills",
          "badges": ["HTML", "CSS", "Javascript", "ReactJS", "NodeJS"]
        }
      ]
    },
    {
      "name": "projects",
      "type": "default",
      "columns": 1,
      "heading": "Projects",
      "description": "Dolore dolor ex reprehenderit ex ullamco reprehenderit excepteur eiusmod sunt cupidatat adipisicing duis nisi. Excepteur quis tempor eiusmod fugiat amet nulla mollit eu duis eiusmod. Quis ex cupidatat dolor ea cillum consectetur minim incididunt aute qui aliqua magna ex dolor. Aliqua id velit qui officia reprehenderit ea excepteur sit sunt nulla excepteur irure. Aliquip laborum quis exercitation non amet deserunt ea aliquip dolor ad dolore velit enim in. Do ipsum id do non duis voluptate.",
      "subsections": [
        {
          "name": "project1",
          "type": "media-item",
          "columns": 2,
          "heading": "Project 1",
          "media-details": {
            "type": "image",
            "src": ""
          },
          "description": "Ad aliquip labore enim proident pariatur duis ex et veniam. Mollit ipsum sunt ex esse do laborum. Do proident ullamco dolor mollit proident ullamco fugiat culpa cillum commodo incididunt sint laborum. Et consectetur velit ut ex eiusmod Lorem irure qui aute laborum dolor. Exercitation dolor exercitation ut in elit dolor nisi. Amet officia aliquip in nisi mollit nulla veniam commodo nostrud."
        },
        {
          "name": "project2",
          "type": "media-item",
          "columns": 2,
          "heading": "Project 2",
          "media-details": {
            "type": "video",
            "src": ""
          },
          "description": "Sint sint id cillum dolore. Commodo esse aliquip cupidatat in culpa nulla commodo culpa non elit. Ex occaecat aliqua anim ex aliqua ullamco enim ea exercitation. Laborum commodo laboris ad nulla sint ullamco ipsum officia exercitation commodo. Ut est labore irure esse dolore esse. Voluptate veniam commodo nulla commodo eu ex qui qui culpa adipisicing id ut voluptate. Lorem dolor laborum elit officia ipsum anim dolore ipsum commodo consectetur eu."
        },
        {
          "name": "project3",
          "type": "media-item",
          "columns": 2,
          "heading": "Project 3",
          "media-details": {
            "type": "image-slide",
            "src": [""]
          },
          "description": "Minim anim minim Lorem aliqua irure amet ad ex aliqua in do ea Lorem irure. Dolor labore minim est deserunt ipsum eu occaecat laboris officia do id. Eiusmod est sunt irure consequat consectetur Lorem non excepteur fugiat anim elit. Non officia voluptate eu velit sunt labore proident non nisi esse eu duis dolor irure."
        }
      ]
    }
  ]
}
```
