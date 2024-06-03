import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { IMAGEURL } from '@/Api/apiConfig';

const BlogCard = ({ blogData }) => {
  const { title, imageSrc, content } = blogData;

  return (
    <div className='blog-card'>
      <div className='blog-img-info'>
        <div className='blog-img'>
          <Image src={blogData?.thumbnail!='null'?`${IMAGEURL}${blogData?.thumbnail}`:"/all/no-img.avif"} className='img-fluid w-100' width={300} height={300} alt={title} />
        </div>
      </div>

      <div className='blog-info mt-2'>
        <h3 className='line-clamp-1'>{title}</h3>
        <p className='line-clamp'>{content}</p>

        <div>
          <Link href={`/blog/${blogData?.slug}`} className='read-more-1 mt-2'>
            Read More <FaChevronRight className='right-icon' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
