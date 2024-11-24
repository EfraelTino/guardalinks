import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
interface Acordeon {
    id: number;
    q: string;
    a: string
}
interface FaqsItem {
    title: string, label: string, questions: Acordeon[]
}
interface FaqPops {
    data?: { faqs: FaqsItem, marca: string }

}

function FaqS({ data }: FaqPops) {
    return (
        <>
            <section className="flex justify-center py-10 px-4 md:px-0">
                <div className=" flex flex-col items-center justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-balance">{data?.faqs.title}</h2>
                    <p className="text-center text-muted-foreground mb-4 md:mb-16">{
                        data?.faqs.label}</p>
                    <div className="w-full max-w-lg">
                        {
                            data?.faqs.questions.map((item, index) => (
                                <Accordion key={index} type="single" collapsible>
                                    <AccordionItem value={`item-${item.id}`}>
                                        <AccordionTrigger className="font-semibold text-md">{item.q}</AccordionTrigger>
                                        <AccordionContent className="pb-4 pt-0 text-muted-foreground">
                                            {
                                                item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ))
                        }

                    </div>
                </div>
            </section>
            <section className="flex justify-center border-t border-t-orange-50 pt-2">
                <div className=" flex flex-col md:flex-row w-full items-center justify-between">
                    <p className="text-center text-sm md:text-base text-muted-foreground" dangerouslySetInnerHTML={{ __html: data?.marca || '' }} />
                    <a href="https://linktr.ee/efrael" className="flex items-center justify-center" target="_blank"><div className="w-16 h-auto"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Linktree_logo.svg/512px-Linktree_logo.svg.png?20230519151448" alt="Linktree Efrael" /></div></a></div></section>
        </>

    );
}

export default FaqS;