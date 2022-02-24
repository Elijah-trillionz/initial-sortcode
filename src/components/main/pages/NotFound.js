import React from 'react';
import { Helmet } from 'react-helmet-async';
// credit: Kasper De Bruyne and Jemis Mali for content and svg respectively

export const NotFound = () => {
  return (
    <main className='not-found'>
      <Helmet>
        <title>404 - Page Not Found - SortCode</title>
      </Helmet>
      <div className='container'>
        <div className='col-6'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
            <linearGradient
              id='a'
              x1='2.625'
              x2='25.637'
              y1='13.491'
              y2='13.491'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stopColor='#2B2E81' />
              <stop offset='1' stopColor='#BE4F9C' />
            </linearGradient>
            <path
              fill='url(#a)'
              d='M10.5 15.5H12v.5c0 .3.2.5.5.5s.5-.2.5-.5v-.5h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H13V13c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.5h-.9l.6-3.4c.1-.3-.1-.5-.4-.6-.3-.1-.5.1-.6.4l-.8 4c0 .1 0 .3.1.4s.4.2.5.2z'
            />
            <linearGradient
              id='b'
              x1='2.625'
              x2='25.637'
              y1='13.491'
              y2='13.491'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stopColor='#2B2E81' />
              <stop offset='1' stopColor='#BE4F9C' />
            </linearGradient>
            <path
              fill='url(#b)'
              d='M20.5 15.5H22v.5c0 .3.2.5.5.5s.5-.2.5-.5v-.5h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H23V13c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.5h-.9l.6-3.4c.1-.3-.1-.5-.4-.6-.3-.1-.5.1-.6.4l-.8 4c0 .1 0 .3.1.4s.4.2.5.2z'
            />
            <linearGradient
              id='c'
              x1='2.625'
              x2='25.637'
              y1='22'
              y2='22'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stopColor='#2B2E81' />
              <stop offset='1' stopColor='#BE4F9C' />
            </linearGradient>
            <path
              fill='url(#c)'
              d='M6.5 21.5h-.6c-.1-.3-.2-.6-.4-.9l.5-.4c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-.4.4c-.3-.2-.6-.3-.9-.4V19c0-.3-.2-.5-.5-.5s-.5.2-.5.5v.6c-.3.1-.6.2-.9.4l-.4-.4c-.2-.2-.5-.2-.7 0s-.2.4 0 .6l.4.4c-.2.3-.3.6-.4.9H.5c-.3 0-.5.2-.5.5s.2.5.5.5h.6c.1.3.2.6.4.9l-.5.4c-.2.2-.2.5 0 .7.1.1.2.1.4.1s.3 0 .4-.1l.4-.4c.3.2.6.3.9.4v.5c0 .3.2.5.5.5s.4-.2.4-.5v-.6c.3-.1.6-.2.9-.4l.4.4c.1.1.2.1.4.1s.3 0 .4-.1c.2-.2.2-.5 0-.7l-.4-.4c.2-.3.3-.6.4-.9h.6c.1.1.3-.1.3-.4s-.2-.5-.5-.5zm-3 2c-.8 0-1.5-.7-1.5-1.5 0-.4.2-.8.4-1.1.3-.3.7-.4 1.1-.4.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z'
            />
            <linearGradient
              id='d'
              x1='2.625'
              x2='25.637'
              y1='22'
              y2='22'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stopColor='#2B2E81' />
              <stop offset='1' stopColor='#BE4F9C' />
            </linearGradient>
            <circle cx='3.5' cy='22' r='.5' fill='url(#d)' />
            <linearGradient
              id='e'
              x1='2.625'
              x2='25.637'
              y1='16'
              y2='16'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stopColor='#2B2E81' />
              <stop offset='1' stopColor='#BE4F9C' />
            </linearGradient>
            <path
              fill='url(#e)'
              d='M31.5 12h-.8l.6-.6c.2-.2.2-.5 0-.7l-1.4-1.4c-.2-.2-.5-.2-.7 0l-.6.6V9c0-.3-.2-.5-.5-.5h-1V8c0-.8-.7-1.5-1.5-1.5h-17C7.7 6.5 7 7.2 7 8v5.6c-.3.1-.6.2-.9.4l-.4-.4c-.2-.2-.5-.2-.7 0s-.2.4 0 .6l.4.4c-.2.3-.3.6-.4.9h-.5c-.3 0-.5.2-.5.5s.2.5.5.5h.6c.1.3.2.6.4.9l-.5.4c-.2.2-.2.5 0 .7.1.1.2.1.4.1s.3 0 .4-.1l.4-.4c.3.2.6.3.9.4V20c0 .8.7 1.5 1.5 1.5H14v3h-3.5c-.3 0-.5.2-.5.5s.2.5.5.5h13c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H20v-3h5.5c.8 0 1.5-.7 1.5-1.5v-1.5h1c.3 0 .5-.2.5-.5v-.8l.6.6c.2.2.5.2.7 0l1.4-1.4c.2-.2.2-.5 0-.7l-.5-.7h.8c.3 0 .5-.2.5-.5v-2c0-.3-.2-.5-.5-.5zm-4.5.5c.6 0 1 .4 1 1s-.4 1-1 1v-2zm-18.5-5h17c.3 0 .5.2.5.5v9.5H8V8c0-.3.2-.5.5-.5zM7 17.4c-.6-.2-1-.8-1-1.4 0-.4.2-.8.4-1.1.2-.2.4-.3.6-.3v2.8zm12 7.1h-4v-3h4v3zm6.5-4h-17c-.3 0-.5-.2-.5-.5v-1.5h18V20c0 .3-.2.5-.5.5zM31 14h-.7c-.2 0-.4.1-.5.4-.1.2-.1.4-.2.6-.1.2-.1.4.1.6l.5.5-.7.7-.5-.6c-.2-.2-.4-.2-.6-.1-.2.1-.4.2-.6.2-.2.1-.3.3-.3.5v.7H27v-2c1.1 0 2-.9 2-2s-.9-2-2-2v-2h.5v.7c0 .2.1.4.3.5.2.1.4.1.6.2.2.1.4.1.6-.1l.5-.5.7.7-.5.5c-.2.2-.2.4-.1.6.1.2.2.4.2.6.1.2.3.4.5.4h.7v.9z'
            />
            <linearGradient
              id='f'
              x1='2.625'
              x2='25.637'
              y1='13.5'
              y2='13.5'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stopColor='#2B2E81' />
              <stop offset='1' stopColor='#BE4F9C' />
            </linearGradient>
            <path
              fill='url(#f)'
              d='M16.5 16.5h1c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5zM16 12c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-3z'
            />
          </svg>
        </div>
        <div className='col-6'>
          <h1>Error</h1>
          <h2>UH OH! You're lost.</h2>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the quiz
            or challenge page.
          </p>
          <br />
          <br />
          <button className='btn'>
            <a href='/dashboard/quiz/js'>Quiz</a>
          </button>
          <button className='btn'>
            <a href='/dashboard/tasks'>Challenge</a>
          </button>
        </div>
      </div>
    </main>
  );
};