












'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import ford from '@/public/images/autoSpares/ford.png'
import toyota from '@/public/images/autoSpares/toyota.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Label } from '../ui/label'
import { Star, StarsIcon } from 'lucide-react'
import Link from 'next/link'
import { Calendar } from '../ui/calendar'
import { Button } from '../ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { cn } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Alert } from 'reactstrap'
const FormSchema = z.object({
    dob: z.date({
        required_error: "A date of booking is required.",
    }),
})

function Test() {
    const [successAlertVisible, setSuccessAlertVisible] = useState(false);

    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
        setSuccessAlertVisible(true);
        setTimeout(() => {
            setSuccessAlertVisible(false);
        }, 3000);
    }
  return (
    <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="dob"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    // disabled={(date) =>
                                                    //     date > new Date() || date < new Date("1900-01-01")
                                                    //   }
                                                    initialFocus
                                                    className="rounded-md border bg-gray-50"
                                                />
                                            </FormControl>
                                        </PopoverTrigger>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex justify-center'>
                            <Button type='submit' className='bg-green-500 hover:bg-transparent  w-[100%]
                                                           hover:border hover:border-green-400 hover:text-green-400 '>
                                احجز مركز الصيانة
                            </Button>
                        </div>

                    </form>
                </Form>
           
            <div className={`${
                    successAlertVisible
                        ? 'success-alert'
                        : 'hidden'
                } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10`}
  >
                <Alert color="success" isOpen={successAlertVisible}>
                    <span className="alert-icon">
                        <i className="ni ni-like-2"></i>
                    </span>
                    <span className="alert-text">
                        <strong>Success!</strong>{" "}
                        This is a success alert—check it out!
                    </span>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                        onClick={() => { setSuccessAlertVisible(false) }}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Alert>
            </div>
    </div>
  )
}

export default Test