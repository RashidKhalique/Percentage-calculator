import React from 'react'

const About = () => {
  return (
    <section className="max-w-4xl px-4 text-left">
        <h2 className="text-xl font-bold mb-2">About</h2>
        <p className="text-gray-700 mb-6">
          This website is designed to help you quickly and easily calculate percentages for a variety of purposes.
          Whether you're calculating discounts, calculating tips, or trying to figure out how much something has
          increased or decreased in value, our percentage calculator can help.
        </p>

        <h3 className="text-lg font-bold mb-1">FAQ</h3>

        <h4 className="font-semibold mt-4">What is a percentage?</h4>
        <p className="text-gray-700">
          Percentage is a way of expressing a number as a fraction of 100. It is commonly used to represent a portion
          of a whole or to compare two numbers. Percentages are often denoted with the symbol "%".
          For example, if there are 100 cars in a garage and 25 of them are white, we could say that 25% of the cars in
          the garage are white.
        </p>

        <h4 className="font-semibold mt-4">How do you calculate a percentage?</h4>
        <p className="text-gray-700">
          To calculate a percentage, you typically divide the part (the smaller value) by the whole (the larger value),
          and then multiply the result by 100. This gives you the percentage value as a number between 0 and 100.
        </p>

        <h4 className="font-semibold mt-4">Why percentages matter?</h4>
        <p className="text-gray-700 mb-10">
          Percentages are used in a wide variety of contexts, from calculating discounts and taxes to measuring
          changes in stock prices and economic indicators. Understanding how percentages work can help you make more
          informed decisions in a variety of areas, from personal finance to business management.
        </p>
      </section>
  )
}

export default About