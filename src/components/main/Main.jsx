import articleImgMobile from 'src/assests/images/image-web-3-mobile.jpg'
import articleImgDesktop from 'src/assests/images/image-web-3-desktop.jpg'

import retroPcs from 'src/assests/images/image-retro-pcs.jpg'
import topLaptops from 'src/assests/images/image-top-laptops.jpg'
import gamingGrowth from 'src/assests/images/image-gaming-growth.jpg'

function New({ title, content}) {
  return (
    <>
      <div className='new-container'>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </>
  )
}

function Featured({ featuredImg, sequence, title, content }) {
  return (
    <>
      <div className='featured'>
        <img src={featuredImg} alt="featured-img" className='featured__img'/>
        <div className='featured__content'>
          <h2>{sequence}</h2>
          <h3>{title}</h3>
          <p>{content}</p>
        </div> 
      </div>
    </>
  )
}

export default function Main() {
  return (
    <>
      <main className="main">
        <section className="content-top">
          <div className="main-article__container">
            <picture>
              <source media="(min-width: 720px)" srcset={articleImgDesktop} sizes="" />
              <img src={articleImgMobile} alt="" className="article-img"/>
            </picture>
            <div className="main-article">
              <h1 className='main-article__title'>The Bright Future if Web 3.0?</h1>
              <div className="main-article__content">
                <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button>READ MORE</button>
              </div>
            </div>
          </div>
          <div className="news">
            <h2 className="news__title">New</h2>
            <New 
              title="Hydrogen VS Electric Cars"
              content="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <div className="news-line"></div>
            <New 
              title="The Downsides of AI Artistry"
              content="What are the possible adverse effects of on-demand AI image generation?"
            />
            <div className="news-line"></div>
            <New 
              title="Is VC Funding Drying Up?"
              content="Private funding by VC firms is down 50% YOY. We take a look at what that means."
            />
          </div>
        </section>
          
        <section className="content-bottom">
          <Featured
            featuredImg={retroPcs}
            sequence="01"
            title="Reviving Retro PCs"
            content="What happens when old PCs are given modern upgrades?"
          />
          <Featured
            featuredImg={topLaptops}
            sequence="02"
            title="Top 10 Laptops of 2022"
            content="Our best picks for various needs and budgets."
          />
          <Featured
            featuredImg={gamingGrowth}
            sequence="03"
            title="The Growth of Gaming"
            content="How the pandemic has sparked fresh opportunities."
          />
        </section>
      </main>
    </>
  )
}