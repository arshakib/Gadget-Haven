const MAp = () => {
  return (
    <div>
      <div className="text-center h-[344px] bg-[#9538E2]">
        <h1 className="pt-9 text-white font-bold text-4xl">DEV Location</h1>
        <p className="text-white text-base mt-6">
          Hello! I’d love for you to explore my area and visit my home. It’s a
          wonderful place, <br /> and I’d be happy to show you around. Let me
          know when you’d like to come over!
        </p>

        <div className="mt-10  mx-auto border w-[1120px] h-[467px] p-1 bg-white rounded-xl">
          <iframe
            className="p-9 w-full h-full rounded-xl mb-12"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.550206729524!2d90.35180737499499!3d22.707782228002742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37553422164be4f7%3A0xd78282d97d2aaf93!2sCollege%20Ave%2C%20Barisal!5e0!3m2!1sen!2sbd!4v1730903981392!5m2!1sen!2sbd"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MAp;
