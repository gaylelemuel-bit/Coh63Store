import React, { useEffect, useRef } from 'react';
import { Carousel } from 'bootstrap'; 
import './Home.css';
function Home() {
  const carouselRef = useRef(null);

  const productImages = [
    { src: "https://faithleticsfamily.com/cdn/shop/files/303CEF91-CDD6-4A75-94A1-40479A541D0B_ae0bfd2c-c9d9-42f6-8ef9-e5bcf7648838.jpg?v=1694023188" },
    { src: "https://christlifeclub.com/wp-content/uploads/2024/10/christian-apparel-brands.png", alt: "Faith Apparel" },
    { src: "https://i0.wp.com/www.patrickweaver.org/wp-content/uploads/2022/11/t-shirt-mockup-featuring-a-group-of-friends-20750.png?fit=1020%2C765&ssl=1", alt: "Christian Tee" },
    { src: "https://christian-apparel.shop/wp-content/uploads/2022/05/christen-online-shop-kleidung-mode-jsign.jpg", alt: "Apparel 4" },
    { src: "https://i.etsystatic.com/44305373/r/il/f9765b/6510125238/il_1080xN.6510125238_2u6c.jpg", alt: "Apparel 5" },
    { src: "https://cdn.rapzilla.com/wp-content/uploads/2017/02/23153000/dope-agape-attire.jpg", alt: "Apparel 6" },
    { src: "https://www.refinery29.com/images/10650830.jpg?crop=40%3A21", alt: "Apparel 7" },
    { src: "https://i.etsystatic.com/45393452/r/il/e6c742/5278884563/il_1080xN.5278884563_bry6.jpg", alt: "Apparel 8" },
    { src: "https://www.tohimbe.com/cdn/shop/files/african-american-girl-with-a-hipster-friend-wearing-t-shirts-mockup-at-a-startup-a20423_2_bb10b121-900c-4a6b-a783-029edfe36ef9.png?v=1737514541", alt: "Apparel 9" },
    { src: "https://walkinhisfootsteps.com/cdn/shop/articles/1765849880377_image_1765849880274.png?v=1765849924&width=1080", alt: "Apparel 10" },
    { src: "https://gracefiber.com/cdn/shop/articles/SEOon_Man_and_women_in_shirts.jpg?v=1746694352&width=1400", alt: "Apparel 11" }
  ];

  const latestDrops = [
  { id: 1, name: "Love Never Fails Hoodiet", price: "$14.99", img: "https://img4.dhresource.com/webp/m/260x260/f3/albu/ys/s/11/92575606-c7ef-42a4-a950-8ccf4315cfbb.png" },
  { id: 2, name: "Jesus Matching set", price: "$39.99", img: "https://i5.walmartimages.com/seo/Kids-Clothes-Boys-Kids-Sweatsuit-Hoodie-Pants-Jesus-Letter-Print-Sweatshirt-Joggers-2-Piece-Sets-Toddler-Outfits-Boys-Grey-12-Years-13-Years_2f6d767e-bf03-4e3d-a7f1-673439557576.696fb3aa5b9fe36fbd4595d9ca8fa49d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" },
  { id: 3, name: "Heavyweight Hoodie", price: "$19.99", img: "https://m.media-amazon.com/images/I/61fQFztf-uL._AC_SL1500_.jpg" },
  { id: 4, name: "Royalty Hoodie", price: "$29.99", img: "https://img4.dhresource.com/webp/m/f3/albu/jc/n/16/08336417-49e6-4be9-8643-19187f138b29.jpg" },
  { id: 5, name: "Genesis Crewneck", price: "$39.99", img: "https://lordsguidance.com/cdn/shop/products/TracksuitStyle1Red_6e8fbea6-80f1-41c9-9e4e-284c895582d8_2048x2048.png?v=1679571442" },
  { id: 6, name: "But God Crewneck", price: "$12.99", img: "https://m.media-amazon.com/images/I/61ju6zlYblL._AC_SL1300_.jpg" },
  { id: 7, name: "Royalty set", price: "$34.99", img: "https://img-va.myshopline.com/image/store/1660029927621/Follow-Jesus-And-Fruit-Peace-Christian-Fleece-Hoodie-Set2.jpeg?w=1000&h=1000" },
  { id: 8, name: "Faith Hoodie", price: "$14.99", img: "https://i5.walmartimages.com/seo/Wild-Bobby-Cute-Christian-Quote-Faith-Over-Fear-Inspirational-Christian-Unisex-Graphic-Hoodie-Sweatshirt-Light-Pink-X-Large_79cb3aaa-2edc-4903-aea9-6822386eb913.bc877b4663392f853805de6efbdf0676.jpeg" },
];

  useEffect(() => {
    let carouselInstance = null;
    if (carouselRef.current) {
      carouselInstance = new Carousel(carouselRef.current, {
        ride: 'carousel',
        interval: 3000
      });
    }
    return () => { if (carouselInstance) carouselInstance.dispose(); };
  }, []);

  return (
    <>
    {/* 1. Announcement Bar */}
    <div className="bg-dark text-white text-center py-2 small fw-bold text-uppercase tracking-widest">
      Free shipping on all orders over $75 — Spread the Word
    </div>
    <div className="container py-5">
        <div className="bg-light p-2 rounded-4 mb-5 text-center border-start border-dark border-5 shadow-sm">
        <h2 className="display-6 fw-bold">Verse of the Season</h2>
        <p className="lead fst-italic my-0">
          "But seek first his kingdom and his righteousness, and all these things will be given to you as well."
        </p>
        <p className="fw-bold text-muted">— Matthew 6:33</p>
      </div>
      <div className="text-center mb-5">
        <h1 className="display-3 fw-bold text-uppercase">Put It On For Jesus</h1>
        <p className="fs-4 text-muted">Modern apparel rooted in faith & purpose.</p>
      </div>
      <div id="productCarousel" ref={carouselRef} className="carousel slide shadow-lg rounded-4 overflow-hidden">
        <div className="carousel-indicators">
          {productImages.map((_, index) => (
            <button 
              key={index}
              type="button" 
              data-bs-target="#productCarousel" 
              data-bs-slide-to={index} 
              className={index === 0 ? "active" : ""}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {productImages.map((img, index) => (
            <div key={index} className={`  carousel-item ${index === 0 ? "active" : ""}`}>
              {/* This is the <img> tag implementation */}
              <img 
                src={img.src} 
                className="d-flex flex-xxl-shrink-1  w-100 object-fit-cover" 
                style={{ 
                  height:'600px',
                  maxHeight:'30vh',
                  minHeight:'500px'

                 }} 
                alt={img.alt} 
                onError={(e) => { e.target.src = "via.placeholder.com"; }}
              />
              {img.title && (
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                  <h5 className="fw-bold">{img.title}</h5>
                  <p>{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
        {/* 4. New: Product Grid Section */}
      <div className="row g-4">
  <div className="col-12 mb-2">
    <h3 className="fw-bold text-uppercase">latest drops</h3>
  </div>

  {latestDrops?.map((product) => (
    <div key={product.id} className="col-5 col-md-3">
      <div className="card border-0 group shadow-hover transition-all">
        <div className="position-relative overflow-hidden rounded-3">
          <img 
            src={product.img} 
            className="img-fluid w-100 object-fit-cover" 
            alt={product.name} 
          />
        </div>
        <div className="pt-3">
          <h6 className="m-0 p-0 fw-bold">{product.name}</h6>
          <p className="text-muted small mb-4">{product.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>     
    </>
  );
}

export default Home;
