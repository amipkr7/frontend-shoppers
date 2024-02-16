import React from 'react'
import '../DescriptionBox/DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews(122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla molestiae cum iusto blanditiis maiores fuga? Eius, fugit labore! Harum obcaecati minima perferendis, fugit repudiandae eius culpa quasi dolores blanditiis quod excepturi pariatur aperiam esse ex sint? Et maxime autem ducimus, in ad cupiditate aliquam sit nostrum distinctio deserunt voluptatum.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
