<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">


  <h3 align="center">Spark Sum — Summarize Text in a Spark</h3>

  <p align="center">
    SparkSum is a text summarization application. 
    <br />
    <a href="https://github.com/ErikTsai/spark-sum"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ErikTsai/spark-sum">View Demo</a>
    ·
    <a href="https://github.com/ErikTsai/spark-sum/issues">Report Bug</a>
    ·
    <a href="https://github.com/ErikTsai/spark-sum/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Picture](https://raw.githubusercontent.com/ErikTsai/spark-sum/main/sparkSumPreview.png)

SparkSum is a text summarizer powered by the OpenAI API's chat completion feature. The user will enter a text they want summarized, as well as the desired word count of the outputted summarized text. This application has not been deployed.

Key Features
  - Builds concise and high quality summaries
  - Creates summarizes based on the user's specified word count


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge)
* ![OpenAI Badge](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=fff&style=for-the-badge)
* ![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat)
* ![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Install Node.JS at [https://nodejs.org/en/download/current](https://nodejs.org/en/download/current)

* Install npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free OpenAPI Key by following this video: [https://youtu.be/nafDyRsVnXU?si=iDQBrmgxrt5_lF9x](https://youtu.be/nafDyRsVnXU?si=iDQBrmgxrt5_lF9x)
2. Clone the repo
   ```sh
   git clone https://github.com/ErikTsai/spark-sum
   ```
3. Install NPM packages
   ```sh
   npm install http-server -g
   ```
4. Enter your API key in `env.js`
   ```js
   OPENAI_API_KEY: 'ENTER YOUR KEY';
   ```
5. Navigate to the path of the spark-sum folder and run in your terminal
   ```sh
   http-server
   ```
6. The Application should be open at [localhost:8080](localhost:8080)
7. To close the server, CTRL+C into the same terminal you opened the server

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- Deploy Application
- Improve Current Styling
- Add Mobile Styling


See the [open issues](https://github.com/ErikTsai/spark-sum/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTACT -->
## Contact

* LinkedIn: [Erik Tsai](https://www.linkedin.com/in/erik-tsai/)
* Project Link: [Spark Sum](https://github.com/ErikTsai/spark-sum)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ErikTsai/spark-sum.svg?style=for-the-badge
[contributors-url]: https://github.com/ErikTsai/spark-sum/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ErikTsai/spark-sum.svg?style=for-the-badge
[forks-url]: https://github.com/ErikTsai/spark-sum/network/members
[issues-shield]: https://img.shields.io/github/issues/ErikTsai/spark-sum.svg?style=for-the-badge
[issues-url]: https://github.com/ErikTsai/spark-sum/issues
