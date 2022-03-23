import React from 'react'
import './styles/TodayCard.css'

const TodayCard = ({ current, todayInfo }) => {

  const compassAngle = {
    transform: `rotate(${current.wind_degree}deg)`
  }

  return (
    <div className='today-card'>
      <p className='today-description'>{current.condition.text}</p>
      <div className='today-container'>
        <div className='today-left'>
          <p className='today-temp'>{Math.round(current.temp_f)}<span className="degree">°</span></p>
          <p className='high-low'>{Math.round(todayInfo.day.maxtemp_f)}<span className="degree">°</span>/{Math.round(todayInfo.day.mintemp_f)}<span className="degree">°</span></p>
          <div className='icons'>
            <div className='percipitation'>
              <svg width='64px' viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0C25.5469 0 19.9453 4.51563 18.4375 10.6875C15.9453 11.6562 13.875 13.625 12.8125 16.0625C5.82031 15.5469 0 21.1094 0 28C0 34.6172 5.38281 40 12 40H16L18 36H12C7.58594 36 4 32.4141 4 28C4 23.5859 7.58594 20 12 20C12.5547 20 13.1172 20.0469 13.75 20.1875L15.75 20.625L16.125 18.6875C16.6172 16.4766 18.4141 14.7188 20.625 14.1875L21.9375 13.875L22.125 12.5625C22.8438 7.69531 27.0859 4 32 4C35.7891 4 39.2266 6.10938 40.9375 9.5L41.6875 11.0625L43.375 10.5C44.3125 10.1719 45.1641 10 46 10C50.4141 10 54 13.5859 54 18C54 18.0781 54.0078 18.1797 54 18.25C53.9844 18.3828 53.9531 18.4844 53.9375 18.625L53.8125 20.0625L55.125 20.625C58.0781 21.8828 60 24.7891 60 28C60 32.4141 56.4141 36 52 36H48L50 40H52C58.6172 40 64 34.6172 64 28C64 23.6719 61.6875 19.75 58 17.625C57.7891 11.1875 52.4844 6 46 6C45.2188 6 44.4141 6.07813 43.625 6.25C41.0469 2.35938 36.7422 0 32 0ZM36 20C36 20 32 25.7891 32 28C32 30.2109 33.7891 32 36 32C38.2109 32 40 30.2109 40 28C40 25.7891 36 20 36 20ZM26 30C26 30 22 35.7891 22 38C22 40.2109 23.7891 42 26 42C28.2109 42 30 40.2109 30 38C30 35.7891 26 30 26 30ZM42 36C42 36 38 41.7891 38 44C38 46.2109 39.7891 48 42 48C44.2109 48 46 46.2109 46 44C46 41.7891 42 36 42 36Z" fill="hsl(35, 8%, 20%)"/>
              </svg>
              <p>{Math.round(todayInfo.day.daily_chance_of_rain)}%</p>
            </div>
            <div className='wind'>
              <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.9437 0.421295C39.9873 0.421295 35.955 4.35913 35.955 9.19937H41.3483C41.3483 7.26334 42.9612 5.68817 44.9437 5.68817C46.9262 5.68817 48.5392 7.26334 48.5392 9.19937C48.5392 11.1354 46.9262 12.7106 44.9437 12.7106H7.19092V17.9774H44.9437C49.9001 17.9774 53.9325 14.0396 53.9325 9.19937C53.9326 4.35913 49.9001 0.421295 44.9437 0.421295Z" fill="hsl(35, 8%, 20%)"/>
                <path d="M67.4158 2.17697C61.9637 2.17697 57.5281 6.50863 57.5281 11.8329C57.5281 15.7051 60.7541 18.8553 64.7191 18.8553C68.6842 18.8553 71.91 15.705 71.91 11.8329H66.5167C66.5167 12.8009 65.7103 13.5886 64.7189 13.5886C63.7277 13.5886 62.9211 12.8011 62.9211 11.8329C62.9211 9.41269 64.9373 7.44385 67.4155 7.44385C71.3806 7.44385 74.6064 10.5942 74.6064 14.4662C74.6064 18.3385 71.3805 21.4886 67.4155 21.4886H0V26.7555H67.4158C74.3547 26.7555 80 21.2425 80 14.4662C80 7.68997 74.3547 2.17697 67.4158 2.17697Z" fill="hsl(35, 8%, 20%)"/>
                <path d="M53.9326 30.2669H7.19092V35.5338H53.9325C56.4108 35.5338 58.4269 37.5027 58.4269 39.9228C58.4269 42.343 56.4106 44.3118 53.9325 44.3118C51.4544 44.3118 49.4381 42.3428 49.4381 39.9228H44.0448C44.0448 45.247 48.4804 49.5787 53.9325 49.5787C59.3845 49.5787 63.8201 45.247 63.8201 39.9228C63.8201 34.5985 59.3847 30.2669 53.9326 30.2669Z" fill="hsl(35, 8%, 20%)"/>
              </svg>
              <p>{current.wind_mph} mph</p>
            </div>
          </div>
        </div>
        <div className='today-right'>
          <p>Feels Like: {Math.round(current.feelslike_f)}°</p>
          <p>Wind Direction: <svg id="compass" style={compassAngle} width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polygon points="12 2 19 21 12 17 5 21 12 2"></polygon></svg></p>
          <p>Wind Gust: {current.gust_mph} mph</p>
          <p>Humidity: {current.humidity}%</p>
          <div className='sun-icons'>
            <div className='sunrise'>
              <svg width="57" height="54" viewBox="0 0 57 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1802 41.1129C40.1802 37.9937 38.9411 35.0024 36.7356 32.7968C34.53 30.5912 31.5386 29.3521 28.4194 29.3521C25.3003 29.3521 22.3089 30.5912 20.1033 32.7968C17.8978 35.0024 16.6587 37.9937 16.6587 41.1129" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28.4194 3.4785V19.9436" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.1196 22.8132L13.4597 26.1532" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5459 41.1129H7.2502" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M49.5889 41.1129H54.2932" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M43.3789 26.1532L46.719 22.8132" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M54.2932 50.5215H2.5459" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.0107 12.8871L28.4193 3.4785L37.8279 12.8871" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>{todayInfo.astro.sunrise.toLowerCase().replace(/^(0+)/g, '')}</p>
            </div>
            <div className='sunset'>
              <svg width="57" height="54" viewBox="0 0 57 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1802 41.1129C40.1802 37.9937 38.9411 35.0024 36.7356 32.7968C34.53 30.5912 31.5386 29.3521 28.4194 29.3521C25.3003 29.3521 22.3089 30.5912 20.1033 32.7968C17.8978 35.0024 16.6587 37.9937 16.6587 41.1129" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28.4194 19.9436V3.4785" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.1196 22.8132L13.4597 26.1532" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5459 41.1129H7.2502" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M49.5889 41.1129H54.2932" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M43.3789 26.1532L46.719 22.8132" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M54.2932 50.5215H2.5459" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M37.8279 10.5349L28.4193 19.9435L19.0107 10.5349" stroke="hsl(35, 8%, 20%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>{todayInfo.astro.sunset.toLowerCase().replace(/^(0+)/g, '')}</p>
            </div>
          </div>

          {/* <p>
            <svg width="48" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
	            <path d="M40 3.3335V0C32.272 0 25.5775 4.391 22.2475 10.8105C18.5805 6.2535 12.967 3.333 6.6665 3.333V6.6665C10.3465 6.6665 13.3335 9.65 13.3335 13.3335V18.457C9.7915 15.28 5.1285 13.3335 0 13.3335V16.6665C3.68 16.6665 6.6665 19.65 6.6665 23.3335V40H40V16.6665C37.435 16.6665 35.104 17.64 33.3335 19.2285V10C33.3335 6.317 36.32 3.3335 40 3.3335ZM16.6665 36.6665H10V23.3335C10 21.958 9.72 20.646 9.2155 19.453C13.705 22.4415 16.6665 27.547 16.6665 33.3315V36.6665ZM20 19.9985V33.3315C20 29.2465 18.7695 25.4505 16.6665 22.2865V13.3335C16.6665 11.958 16.3865 10.646 15.8825 9.453C17.86 10.768 19.5155 12.513 20.7765 14.5275C20.283 16.268 20 18.099 20 19.9985ZM30 10V36.6665H23.3335V19.9985C23.3335 14.214 26.2955 9.108 30.7825 6.1195C30.28 7.313 30 8.623 30 10ZM36.6665 20.895V36.6665H33.3335V26.6665C33.3335 24.204 34.6765 22.0495 36.6665 20.895Z" fill="hsl(35, 8%, 20%)"/>
            </svg>Low
          </p>
          <p>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
	            <path d="M43.0122 29.6424C44.0706 29.0388 45.078 28.3338 46.0002 27.4998L40.9644 20.3268C42.051 19.77 43.0764 19.086 43.9998 18.2496L34.0002 3.9996L24 18.2502C24.924 19.0866 25.9494 19.7706 27.0354 20.3274L25.4046 22.6506L20.9658 16.3272C22.0512 15.7704 23.0766 15.0858 24 14.25L13.9998 0L4.0002 14.25C4.9242 15.0858 5.9502 15.7704 7.0344 16.3272L2.0004 23.5002C2.922 24.3342 3.9288 25.0416 4.9878 25.6428L0 32.7498C3.3564 35.7888 7.6182 37.5042 12 37.9044V43.9998H16.0002V37.9044C17.4672 37.7694 18.9084 37.4454 20.3178 37.014C23.6256 39.8808 27.7506 41.5182 32.0004 41.9046V48H36V41.9046C40.3812 41.5038 44.6424 39.7896 48 36.75L43.0122 29.6424ZM34.0002 10.965L38.3436 17.1564C37.0062 17.709 35.5314 18 34.0002 18C32.4684 18 30.9942 17.709 29.6562 17.1564L34.0002 10.965ZM30.9624 21.6912C32.9646 22.0878 35.0346 22.0878 37.0368 21.6912L40.4196 26.5116C38.4858 27.4842 36.291 27.9996 34.0002 27.9996C31.707 27.9996 29.5122 27.4842 27.5784 26.5146L30.9624 21.6912ZM13.9998 6.9648L18.3432 13.1562C17.0058 13.7088 15.5304 13.9998 13.9998 13.9998C12.4686 13.9998 10.9938 13.7088 9.6558 13.1562L13.9998 6.9648ZM10.9626 17.6916C12.9636 18.0882 15.036 18.0882 17.037 17.6916L20.4198 22.512C18.486 23.4846 16.2912 24 13.9998 24C11.7066 24 9.5118 23.4846 7.578 22.5156L10.9626 17.6916ZM13.9998 34.0002C10.9488 34.0002 8.037 33.246 5.5302 31.8324L8.7558 27.2364C12.1608 28.2366 15.8376 28.2366 19.2438 27.2364L22.4682 31.8324C19.9608 33.246 17.049 34.0002 13.9998 34.0002ZM34.0002 37.9998C30.9492 37.9998 28.0374 37.2462 25.5312 35.832L28.7562 31.2366C32.1606 32.2368 35.838 32.2368 39.2442 31.2366L42.4686 35.832C39.9612 37.2462 37.0488 37.9998 34.0002 37.9998Z" fill="hsl(35, 8%, 20%)"/>
            </svg>Medium
          </p>
          <p>
            <svg width="48" height="46" viewBox="0 0 38 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3021 23.905L21.3005 23.9089C20.8116 24.111 20.3597 24.3642 19.9335 24.6436V11.4584C20.5204 11.6662 21.142 11.8011 21.8 11.8011L21.8039 11.7994C25.9457 11.7994 29.5549 9.54432 31.4925 6.19944C29.5549 2.85624 25.9457 0.599442 21.8039 0.599442L21.8 0.600562C18.7082 0.600562 16.2 3.1088 16.2 6.20056V11.5799C15.9009 11.403 15.6053 11.2187 15.276 11.0821C10.1206 8.94736 4.46798 9.8932 0.333496 13.0561C1.02062 18.2148 4.34758 22.8813 9.50238 25.0182C11.7743 25.959 14.231 25.6835 16.2 24.5277V45.4H19.9335V38.4426C22.1405 39.8885 25.0009 40.2564 27.6223 39.17L27.6257 39.1666C33.2677 36.8275 36.9138 31.7181 37.6665 26.0666C33.1383 22.6035 26.9475 21.5664 21.3021 23.905ZM21.8 4.33408H21.968C23.7376 4.37384 25.4204 5.052 26.7257 6.19888C25.3784 7.3816 23.6323 8.06536 21.8039 8.06536H21.7165C20.7265 8.02168 19.9335 7.20296 19.9335 6.20056C19.9335 5.17296 20.7718 4.33408 21.8 4.33408ZM15.9082 19.5084C15.3152 20.9375 13.9342 21.8621 12.3864 21.8621C11.8885 21.8621 11.398 21.7635 10.9315 21.5703C7.92709 20.3254 5.62662 17.8368 4.56934 14.8111C6.11158 14.0674 7.81454 13.6682 9.52757 13.6682C11.0082 13.6682 12.4625 13.9599 13.8463 14.5322C14.7871 14.9226 15.5173 15.6534 15.9082 16.5942C16.2985 17.5338 16.2985 18.5693 15.9082 19.5084ZM26.1971 35.7176L26.0677 35.7725C25.5503 35.9679 25.0121 36.0676 24.4656 36.0676C22.6265 36.0676 20.9841 34.97 20.2801 33.2715C19.3248 30.9654 20.4241 28.3133 22.7285 27.3574L22.9833 27.2521C24.4673 26.6742 26.0168 26.3807 27.5971 26.3807C29.6299 26.3807 31.6509 26.8786 33.4614 27.8082C32.3201 31.3479 29.6764 34.2756 26.1971 35.7176Z" fill="hsl(35, 8%, 20%)"/>
            </svg>High
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default TodayCard