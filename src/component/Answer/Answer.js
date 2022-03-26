import React from 'react';
import './Answe.css'

const Answer = () => {
    return (
        <div className='answer-continer'>
            <h4>(1) React কিভাবে কাজ করে:</h4>
            <p> আমরা জানি React declarative কোডে কাজ করে । Dclarative বলতে আমরা যা জানি যেমনঃ navbar,header, filter, function,  variables and list ইত্যাদি । code এর প্রতিটি লাইন অ্যাপ এর উপাদান declarative করে। React সবসময় এক মুখী data প্রদান করে । এতে করে খুব সহজে eror ডিবাগ করে ফিক্স করা যায় ।
            </p>
            <h4>(2) useState কিভাবে কাজ করে :</h4>
            <p>useState কে হুক ও বলা যায়। এটি ২ টি value দিয়ে থাকে। এটি  বর্তমান অবস্থার মান এবং ওই মান Update করার জন্য অন্য ১ function সহ variables প্রদান করে। একটি নতুন উপাদান তৈরি করে এটিতে কিছু React  হুক পাঠালে State কে  tracks করে আপডেট করতে পারে। React component কে আপডেট করতে useState ব্যবহার করা হয় । </p>
        </div>
    );
};

export default Answer;