/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "The Sunset Is Beautiful Isn't It",
    authors:
      "Rosyid",
    conferences:
        "Are you happy with someone new?",
    researchYr: 2020,
    citebox: "popup1",
    image: "https://w0.peakpx.com/wallpaper/553/177/HD-wallpaper-itachi-uchiha-akatsuki-amaterasu-anime-clan-uchiha-naruto-naruto-shippuden-sharingan.jpg",
    citation: {
      vancouver:
        "Ya",
    },
    abstract:
      "Happy ",
    absbox: "absPopup1",
  },

  {
    title: "Say you won't let go",
    authors:
      "Rosyid",
    conferences:
      "Just say you won't let go",
    researchYr: 2020,
    citebox: "popup2",
    image: "https://w0.peakpx.com/wallpaper/5/252/HD-wallpaper-my-way-aesthetic-anime-itachi-kakashi-naruto-naruto-shippuden-obito-obito-uchiha-sasuke-uchiha.jpg",
    citation: {
      vancouver:
        "James Arthur.",
    },
    abstract:
      "What about ur promise",
    absbox: "absPopup2",
  },

  {
    title:
      "Night Changes",
    authors: "Rosyid",
    conferences:
      "It will never change me and you",
    researchYr: 2020,
    citebox: "popup3",
    image: "https://w0.peakpx.com/wallpaper/544/396/HD-wallpaper-kokushibo-kimetsu-upper-no-kimetsu-no-yaiba-anime-goku-yaiba-demon-slayer-moon-naruto-tanjiro.jpg",
    citation: {
      vancouver:
        "One Direction.",
    },
    abstract:
      "Moving to fast",
    absbox: "absPopup3",
  },

  {
    title:
      "Angin Kencang,
    authors:
      "Rosyid",
    conferences:
      "Kau hilang terus tanpa kabar",
    researchYr: 2020,
    citebox: "popup4",
    image: "https://w0.peakpx.com/wallpaper/544/751/HD-wallpaper-black-clover-captain-yami.jpg",
    citation: {
      vancouver:
        "Noh Salleh.",
    },
    abstract:
      "Mimpi indah ingat kamu",
    absbox: "absPopup4",
  },

  {
    title: "Cloud 9",
    authors: "Rosyid",
    conferences:
      "When she calls me pretty, I fell like somebody",
    researchYr: 2020,
    citebox: "popup5",
    image: "https://w0.peakpx.com/wallpaper/959/977/HD-wallpaper-blackclover-asta-5-leaf-clover-asta-black-clover-asta-demon-black-clover-demon-asta.jpg",
    citation: {
      vancouver:
        "You will always be my favorite",
    },
    abstract:
      "Beach Bunny",
    absbox: "absPopup5",
  },

  {
    title: "No Suprise",
    authors: "Rosyid",
    conferences:
      "I'll take a quiet life",
    researchYr: 2020,
    citebox: "popup6",
    image: "https://w0.peakpx.com/wallpaper/726/91/HD-wallpaper-mikasa-akerman-aot.jpg",
    citation: {
      vancouver:
        "Radiohead.",
    },
    abstract:
      "Silent.",
    absbox: "absPopup6",
  },

  {
    title:
      "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
    authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup7",
    image: "https://w0.peakpx.com/wallpaper/235/311/HD-wallpaper-eren-and-mikasa-anime-aot-attack-on-titan-eren-jaeger-eren-yeager-levi-levi-ackerman-love.jpg",
    citation: {
      vancouver:
        "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 7",
    absbox: "absPopup7",
  },
  {
    title:
      "Forward and Backward Information Retention for Accurate Binary Neural Networks",
    authors:
      "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup8",
    image: "https://w0.peakpx.com/wallpaper/68/676/HD-wallpaper-eren-yeager-cloud-reiner-braun-sky-attack-on-titan-anime-aesthetic-jean-kirstein-shingeki-no-kyojin-levi-ackerman-mikasa-ackerman.jpg",
    citation: {
      vancouver:
        "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 8",
    absbox: "absPopup8",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
