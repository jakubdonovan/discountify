import Modal from "react-modal"
import React, { useState } from "react"
import { How } from "../components/how"
import { Hero } from "../components/hero"
import { ChatBox } from "../components/chatbox"
import { OrderForm } from "../components/form"
import { Reviews } from "../components/reviews"
import SEO from "../components/seo"

export interface orderFormProps {
  url: string
  address: {
    street: string
    postcode: string
  }
  notes: string
}

const IndexPage: React.FC = () => {
  // Modal State
  const [open, setOpen] = useState<boolean>(false)

  const handleModal = () => {
    setOpen(!open)
  }

  // Form State
  const initialOrderFormValues = {
    url: "",
    address: {
      street: "",
      postcode: "",
    },
    notes: "",
  }
  const [orderForm, setOrderForm] = useState<orderFormProps>(
    initialOrderFormValues
  )

  const handleOrderForm = (data: orderFormProps) => {
    setOrderForm(data)
  }

  return (
    <div className="flex flex-col">
      <SEO title="50% off uberEats" />

      <div className="grid grid-rows-6">
        <nav className="absolute p-4">
          <a className="tracking-wider text-white font-logo">discountify</a>
        </nav>

        <div className="flex items-center justify-center row-span-6 py-8 bg-orange-400 md:rows-span-4 md:px-12 md:py-0 ">
          <div className="grid px-4 m-auto mt-8 overflow-hidden md:px-8 gap-x-24 gap-y-8 md:grid-cols-2 max-w-7xl md:overflow-visible">
            <Hero handleClick={handleModal} />
            <How />
          </div>
        </div>

        <div className="hidden row-span-2 p-4 md:block">
          {/* <ChatBox {...orderForm} /> */}
          <Reviews />
        </div>
        <Modal
          className="w-full h-full bg-white outline-none"
          ariaHideApp={false}
          isOpen={open}
          onRequestClose={handleModal}
        >
          <OrderForm
            initialValues={initialOrderFormValues}
            handleSubmit={handleOrderForm}
            handleClick={handleModal}
          />
        </Modal>
      </div>

      <div className="p-4 text-sm text-center text-gray-500 md:mt-12 md:whitespace-nowrap ">
        <div className="grid grid-cols-2 ">
          <a className="hover:text-blue-500 hover:underline" href="/privacy">
            Privacy Policy
          </a>
          <a className="hover:text-blue-500 hover:underline" href="/terms">
            Terms and Conditions
          </a>
        </div>

        {/* <div className="flex items-center justify-center mt-4 italic text-gray-400">
          <p className="text-xs whitespace-nowrap">
            © {new Date().getFullYear()} discountify ltd
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default IndexPage
