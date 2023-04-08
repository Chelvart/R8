/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Nyuakkkss",
    authors:
      "Abdul Rosyid",
    conferences:
      "Belom Ada",
    researchYr: 2023,
    citebox: "popup1",
    image: "https://w0.peakpx.com/wallpaper/100/986/HD-wallpaper-garou-one-punch-man-art-manga-anime-monster.jpg",
    citation: {
      vancouver:
        "Abdul Rosyid.",
    },
    abstract:
      "Dibilang Belum Ada Ngeyel",
    absbox: "absPopup1",
  },

  {
    title: "Edisi Takut Masa Depan",
    authors:
      "Abdul Rosyid",
    conferences:
      "Pernah Ga Si Lu Pada Mikirin Masa Depan Lu Bakal Jadi Apa?",
    researchYr: 2023,
    citebox: "popup2",
    image: "https://w0.peakpx.com/wallpaper/447/978/HD-wallpaper-itachi-uchiha-sasuke-sasuke-uchiha-anime-kakashi-naruto-anime-naruto-uzumaki.jpg",
    citation: {
      vancouver:
        "Stress",
    },
    abstract:
      " Rosyid suka mommy ada",
    absbox: "absPopup2",
  },

  {
    title:
      "KUMAHA BARUDAKK",
    authors: "Barudak Bandung",
    conferences:
      "Ketika Baikmu Disepelekan Maju Dan Hancurkan. Maju Ketika Benar Diam Ketika Salah",
    researchYr: 2020,
    citebox: "popup3",
    image: "https://w0.peakpx.com/wallpaper/878/236/HD-wallpaper-gojo-anime-animes-asthethic-jujutsu-kaisen.jpg",
    citation: {
      vancouver:
        " WELL",
    },
    abstract:
      "SIKAT",
    absbox: "absPopup3",
  },
{; 
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
