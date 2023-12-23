
from django.core.management.base import BaseCommand
from bakeryApp.models import Product

class Command(BaseCommand):
    help = 'Populate the database with product data'

    def handle(self, *args, **kwargs):
        from bakeryApp.models import Product

        products = [
            {
                "name": "Naan",
                "description": "A soft and fluffy Indian bread, traditionally baked in a tandoor.",
                "price": 30,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/Naan.jpg",
                "category": "Breads",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Roti",
                "description": "A simple unleavened Indian bread made from whole wheat flour.",
                "price": 10,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/Roti.jpg",
                "category": "Breads",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Paratha",
                "description": "A flaky and layered Indian bread often stuffed with various fillings.",
                "price": 40,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/Paratha.jpg",
                "category": "Breads",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Pav",
                "description": "A soft bun used for making popular dishes like vada pav and pav bhaji.",
                "price": 15,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/Pav.jpg",
                "category": "Breads",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Bhatura",
                "description": "A deep-fried bread that pairs well with spicy curries like chole.",
                "price": 25,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/Bhatura.jpg",
                "category": "Breads",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Pineapple Pastry",
                "description": "A light and fluffy pastry with layers of sponge cake and pineapple filling.",
                "price": 60,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/pineapplePastry.jpg",
                "category": "Pastries",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Chocolate Eclair",
                "description": "A classic pastry filled with vanilla cream and topped with chocolate glaze.",
                "price": 50,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/chocolateEclairs.jpg",
                "category": "Pastries",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Black Forest Pastry",
                "description": "A decadent pastry with layers of chocolate sponge cake, whipped cream, and cherries.",
                "price": 70,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/blackForestPastry.jpg",
                "category": "Pastries",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Mango Mousse Pastry",
                "description": "A delightful pastry featuring layers of mango-flavored mousse and sponge cake.",
                "price": 65,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/mangoMoussePastry.jpg",
                "category": "Pastries",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Strawberry Shortcake",
                "description": "A pastry filled with fresh strawberries and whipped cream on a light cake base.",
                "price": 55,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/strawberryShortCake.jpg",
                "category": "Pastries",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Black Forest Cake",
                "description": "A classic cake featuring layers of chocolate sponge, whipped cream, and cherries.",
                "price": 600,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/blackForestCake.jpg",
                "category": "Cakes",
                "quantity": 1,
                "is_veg": True,
                "serves": 8,
                "availability": True
            },
            {
                "name": "Pineapple Cake",
                "description": "A delightful cake with layers of vanilla sponge and pineapple filling.",
                "price": 550,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/pineappleCake.jpeg",
                "category": "Cakes",
                "quantity": 1,
                "is_veg": True,
                "serves": 8,
                "availability": True
            },
            {
                "name": "Red Velvet Cake",
                "description": "A visually stunning cake with red velvet sponge and cream cheese frosting.",
                "price": 650,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/redVelvetCake.jpg",
                "category": "Cakes",
                "quantity": 1,
                "is_veg": True,
                "serves": 8,
                "availability": True
            },
            {
                "name": "Chocolate Truffle Cake",
                "description": "A rich chocolate cake layered with chocolate ganache and decorated with truffles.",
                "price": 700,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/chocolateTruffleCake.jpg",
                "category": "Cakes",
                "quantity": 1,
                "is_veg": True,
                "serves": 8,
                "availability": True
            },
            {
                "name": "Mango Cream Cake",
                "description": "A seasonal treat featuring layers of fresh mango and cream on a sponge cake.",
                "price": 600,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/mangoCreamCake.jpg",
                "category": "Cakes",
                "quantity": 1,
                "is_veg": True,
                "serves": 8,
                "availability": True
            },
            {
                "name": "Chocolate Cupcake",
                "description": "A rich chocolate-flavored cupcake topped with creamy chocolate frosting.",
                "price": 40,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/chocolateCupcake.jpg",
                "category": "Cupcakes",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Vanilla Cupcake",
                "description": "A classic vanilla cupcake with smooth vanilla frosting.",
                "price": 35,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/vanillaCupcake.jpg",
                "category": "Cupcakes",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Red Velvet Cupcake",
                "description": "A delightful red velvet cupcake with cream cheese frosting.",
                "price": 45,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/redVelvetCupcake.jpg",
                "category": "Cupcakes",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Strawberry Cupcake",
                "description": "A sweet strawberry-flavored cupcake topped with luscious strawberry frosting.",
                "price": 40,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/strawberryCupcake.jpg",
                "category": "Cupcakes",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Lemon Cupcake",
                "description": "A tangy lemon-flavored cupcake with zesty lemon frosting.",
                "price": 35,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/lemonCupcake.jpg",
                "category": "Cupcakes",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Chocolate Chip Cookie",
                "description": "A classic cookie with chunks of chocolate chips baked into a soft dough.",
                "price": 20,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/chocolateChipCookie.jpg",
                "category": "Cookies",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Butter Shortbread Cookie",
                "description": "A buttery and crumbly shortbread cookie that melts in your mouth.",
                "price": 25,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/butterShortbreadCookie.jpg",
                "category": "Cookies",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Oatmeal Raisin Cookie",
                "description": "A wholesome cookie with oats and raisins, perfect for a nutritious treat.",
                "price": 20,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/oatmealRaisinCookie.jpg",
                "category": "Cookies",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Coconut Macaroon",
                "description": "A chewy coconut cookie with a delicate outer crust and sweet flavor.",
                "price": 30,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/coconutMacaroon.jpg",
                "category": "Cookies",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Almond Biscotti",
                "description": "A twice-baked almond cookie, great for dipping into your favorite beverage.",
                "price": 25,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/almondBiscotti.jpg",
                "category": "Cookies",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Dark Chocolate",
                "description": "A rich and intense chocolate with a high cocoa content and bittersweet flavor.",
                "price": 100,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/darkChocolate.jpg",
                "category": "Chocolates",
                "quantity": 100,  # Assuming quantity represents grams
                "is_veg": True,
                "serves": "Varies",
                "availability": True
            },
            {
                "name": "Milk Chocolate",
                "description": "A smooth and creamy chocolate made with milk, loved by all ages.",
                "price": 90,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/milkChocolate.jpg",
                "category": "Chocolates",
                "quantity": 100,  # Assuming quantity represents grams
                "is_veg": True,
                "serves": "Varies",
                "availability": True
            },
            {
                "name": "White Chocolate",
                "description": "A sweet and vanilla-flavored chocolate made with cocoa butter and milk solids.",
                "price": 110,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/whiteChocolate.jpg",
                "category": "Chocolates",
                "quantity": 100,  # Assuming quantity represents grams
                "is_veg": True,
                "serves": "Varies",
                "availability": True
            },
            {
                "name": "Hazelnut Praline",
                "description": "A delightful chocolate with a hazelnut filling and a crunchy praline layer.",
                "price": 120,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/hazelnutPraline.jpg",
                "category": "Chocolates",
                "quantity": 100,  # Assuming quantity represents grams
                "is_veg": True,
                "serves": "Varies",
                "availability": True
            },
            {
                "name": "Fruit & Nut Chocolate",
                "description": "A chocolate loaded with dried fruits and nuts, offering a delightful crunch.",
                "price": 95,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/fruitNutChocolate.jpg",
                "category": "Chocolates",
                "quantity": 100,  # Assuming quantity represents grams
                "is_veg": True,
                "serves": "Varies",
                "availability": True
            },
            {
                "name": "Glazed Doughnut",
                "description": "A classic ring-shaped doughnut covered with a sweet and glossy glaze.",
                "price": 30,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/glazedDoughnut.jpg",
                "category": "Doughnuts",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Chocolate Doughnut",
                "description": "A chocolate-flavored doughnut with chocolate glaze and toppings.",
                "price": 35,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/chocolateDoughnut.jpg",
                "category": "Doughnuts",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Jelly-Filled Doughnut",
                "description": "A soft doughnut filled with fruity jelly or jam, dusted with powdered sugar.",
                "price": 40,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/jellyFilledDoughnut.jpg",
                "category": "Doughnuts",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Boston Cream Doughnut",
                "description": "A cream-filled doughnut with chocolate glaze, resembling a mini cake.",
                "price": 45,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/bostonCreamDoughnut.jpg",
                "category": "Doughnuts",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            },
            {
                "name": "Cinnamon Sugar Doughnut",
                "description": "A doughnut coated in a delightful mix of cinnamon and sugar.",
                "price": 30,
                "image_url": "https://bakerycapstone.blob.core.windows.net/images/cinnamonSugarDoughnut.jpg",
                "category": "Doughnuts",
                "quantity": 1,
                "is_veg": True,
                "serves": 1,
                "availability": True
            }
        ]

        for product in products:
            # Create a new Product instance
            product = Product(
                name=product['name'],
                description=product['description'],
                price=product['price'],
                image_url = product['image_url'],
                category=product['category'],
                quantity=product['quantity'],
                is_veg=product['is_veg'],
                serves=product['serves'],
                # Add the appropriate image field once the images are available in your project
            )
            product.save()
            self.stdout.write(self.style.SUCCESS(f'Created product: {product.name}'))






