import Container from './container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card';

type CameraSectionProps = {
  title: string;
  cameras: CameraProps;
};

type CameraProps = {
  title: string;
  description: string;
  src: string;
}[];

const CameraSection = ({ title, cameras }: CameraSectionProps) => {
  return (
    <Container>
      <section className='my-8'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-3xl font-bold'>
              {title}
            </AccordionTrigger>
            <AccordionContent className='grid grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 xl:grid-cols-6'>
              {cameras.map((camera) => (
                <Card key={camera.title}>
                  <div className='flex justify-between gap-8 p-6'>
                    <CardHeader className='flex-shrink-0 p-0'>
                      <CardTitle>{camera.title}</CardTitle>
                      <CardDescription>{camera.description}</CardDescription>
                    </CardHeader>
                  </div>
                  <CardContent>
                    <iframe src={camera.src} height={400} width={'100%'} />
                  </CardContent>
                </Card>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </Container>
  );
};

export { CameraSection };
