const imageGallery = document.querySelector(".image-gallery")

const fetchImages = async() => {
    const response = await fetch("https://api.unsplash.com/photos?client_id=qM_5SqnONJpuNfT2epCMLKDMsrTlOI23X2PoME_JXdI")

    const data = await response.json()


const articleElement = document.createElement("div")

articleElement.innerHTML = data
    .map(
      (item) =>
        `
          <article>
            <img src=${item.urls.full} alt=${item.user.name} />

            <ul>
              <li>${item.user.name}</li>
              <li>${item.likes} Likes</li>
            </ul>
          </article>
      `
    )
    .join("")

imageGallery.append(articleElement)
}
fetchImages()