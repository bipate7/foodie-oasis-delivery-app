import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift } from 'lucide-react';

const offers = [
  {
    title: "First Order Discount",
    description: "Get 50% off on your first order with code WELCOME50",
    expiry: "Valid until Dec 31, 2025",
    discount: "50% OFF",
    code: "WELCOME50"
  },
  {
    title: "Weekend Special",
    description: "Order above $30 and get free delivery on weekends",
    expiry: "Every Saturday and Sunday",
    discount: "Free Delivery",
    code: "WEEKEND"
  },
  {
    title: "Student Discount",
    description: "15% off for students with valid ID",
    expiry: "Valid throughout the year",
    discount: "15% OFF",
    code: "STUDENT15"
  },
  {
    title: "Family Package",
    description: "Order for 4 or more and get 20% off",
    expiry: "Valid on all family meals",
    discount: "20% OFF",
    code: "FAMILY20"
  }
];

const Offers = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Special Offers</h1>
          <p className="text-muted-foreground">Discover our latest deals and save on your favorite meals</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {offers.map((offer, index) => (
            <Card key={index} className="group transition-all duration-300 hover:shadow-lg card-hover">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="rounded-full p-2 bg-primary/10 text-primary">
                  <Gift className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {offer.title}
                  </CardTitle>
                </div>
                <div className="text-lg font-bold text-primary">
                  {offer.discount}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{offer.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{offer.expiry}</span>
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    {offer.code}
                  </code>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Offers;
