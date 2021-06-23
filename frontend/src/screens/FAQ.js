import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Style from "../css/Styles.module.css";
import "../css/faq.css";

const Faq = () => {
  return (
    <div>
      <div class='titlearea'>
      <h1 class='cen'>FAQ</h1>
      </div>
      <Container>
      <div class="box2">
        <h2 class="sinfo">
          <u>MY ACCOUNT FAQS</u>
        </h2>
        <details class="collapse1" open>
          <summary class="title1">HOW DO I CREATE AN ACCOUNT</summary>
          <hr class="divider1" />
          <p class="description1">
            Creating A Cana Gold Beauty customer account allows you to store
            billing and shipping information so that you do not have to enter it
            every time you place an order. You can also see all purchases made
            after logging into your account. To create an account, simply enter
            your information here.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">HOW CAN I RECOVER/CHANGE MY PASSWORD</summary>
          <hr class="divider1" />
          <p class="description1">
            If you cannot remember your password or need to change your
            password, simply click on the “Forgot Password” link on the account
            log in page. You will need to enter the email address associated
            with your account and click the submit button. After clicking the
            submit button, you will be emailed a “reset password” link along
            with direction as to how to recover or change your password.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            HOW DO I UPDATE MY ACCOUNT INFORMATION
          </summary>
          <hr class="divider1" />
          <p class="description1">
            You can update your account information by logging into your
            customer Account.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            I AM GETTING EMAILS, BUT CAN'T LOGIN?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            If you are receiving email notifications from Cana Gold Beauty, you
            may not have a CanaGoldBeauty.com account yet. Create an account
            here.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            HOW DO I SUBSCRIBE TO YOUR EMAIL NEWSLETTER
          </summary>
          <hr class="divider1" />
          <p class="description1">
            You can subscribe to our emails by entering your email address in
            the Sign Up and Save 15% Email Signup Field in the footer of our
            site.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            HOW DO I UNSUBSCRIBE TO YOUR EMAIL NEWSLETTER
          </summary>
          <hr class="divider1" />
          <p class="description1">
            To be removed from our email list, simply click on the “Unsubscribe”
            link found at the bottom of the email received.
          </p>
        </details>

        <h2 class="sinfo">
          <u>SHIPPING, RETURNS AND EXCHANGES, INTERNATIONAL ORDERS</u>
        </h2>
        <details class="collapse1">
          <summary class="title1">
            WHAT METHODS OF PAYMENT ARE ACCEPTED?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Currently Cana gold accepts the following forms of payment: Visa,
            America Express, MasterCard, Discover, Apple Pay and PayPal,
            per-paid gift cards.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">WHERE CAN I TRACK MY ORDER?</summary>
          <hr class="divider1" />
          <p class="description1">
            Once your order has shipped, you will receive a Shipment
            Confirmation email. This email will contain your tracking number as
            well as a link to track your package.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">CAN I CANCEL MY ORDER?</summary>
          <hr class="divider1" />
          <p class="description1">
            When an order is placed on canagoldbeauty.com we begin processing
            the order immediately, to ensure prompt delivery. We’re unable to
            cancel or change an order once it’s submitted, But we would love
            your feed back why you want to cancel your order. Please email us at
            info@canagoldbeauty.com
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">WHAT ARE YOUR DELIVERY OPTIONS?</summary>
          <hr class="divider1" />
          <p class="description1">
            If ground or free ground shipping is selected, your order will ship
            via the USPS. If our 2 day or overnight shipping options are
            selected, your order will ship via UPS.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            MY ORDER SHOWS DELIVERED, WHERE IS IT?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            With the tracking number provided on your shipping confirmation,
            please contact your local Post Office or UPS (depending on which
            carrier delivered your order) for any further delivery details. If
            you are unable to locate it through the carrier, please email Cana
            Gold Beauty Customer Care at info@canagoldbeauty.com.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            WHAT HAPPENS IF A PRODUCT IS BACKORDERED?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Should an item on your order be out-of-stock, we will notify you via
            email the expected in-stock date. Your remaining order will ship on
            time and the out-of-stock item will ship when available at no extra
            charge to you.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            I RECEIVED DAMAGED PRODUCT, WHAT IS YOUR RETURN POLICY?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Defective and/or damaged merchandise must be reported within 14 days
            of delivery in order to be replaced. Please notify us by email at
            info@canagoldbeauty.com and send a photo of the damaged goods with a
            description of what is defective/damaged.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            I RETURNED MY ORDER WHERE IS MY REFUND?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Cana gold will issue a refund within 14 business days of receiving
            and processing your returned order in our warehouse.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">WHERE DO I SHIP RETURNS?</summary>
          <hr class="divider1" />
          <p class="description1">
            Cana Gold Beauty Inc. c/o Return Department
            <br />
            2005 ocean front walk
            <br />
            venice, CA 90291
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">DO YOU OFFER GIFT WRAPPING SERVICES?</summary>
          <hr class="divider1" />
          <p class="description1">
            Cana Gold Beauty does not currently offer gift wrapping.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            I AM AN INTERNATIONAL CUSTOMER, WHERE CAN I PURCHASE YOUR PRODUCTS?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Cana Gold Beauty is rapidly expanding internationally. Check out our
            Store Locator and enter your city or postal code to find locations
            or email us directly with your info and your address at
            info@CanaGoldbeauty.com to see if we can ship it to you directly and
            give you the exact shipping rates.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            DO YOU ACCEPT INTERNATIONAL CREDIT CARDS?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Yes, Cana Gold accept international credit cards.
          </p>
        </details>

        <h2 class="sinfo">
          <u>AUTO-REPLENISHMENT SUBSCRIPTION PROGRAM</u>
        </h2>
        <details class="collapse1">
          <summary class="title1">WHAT IS AUTO-REPLENISHMENT?</summary>
          <hr class="divider1" />
          <p class="description1">
            Auto-Replenishment is the most convenient way to enjoy your favorite
            products and never run out of your Cana Gold Beauty essentials. We
            automatically send you the products you subscribed to based upon
            your selected frequency. With each order, you receive 15% off + FREE
            SHIPPING.
            <br />
            You always have complete control over your Auto-Replenishment
            orders. We send an email reminder before each order ships. You can
            change your delivery frequency, next order date, or quantity by
            visiting Manage Subscriptions located within the My Account section.
            Changes to subscription orders can be made any time within 24 hours
            of the next scheduled shipment date, and you can cancel at any time.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            HOW DO I CREATE A SUBSCRIPTION FOR AUTO-REPLENISHMENT?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Creating a subscription is easy. To subscribe, simply select the
            Auto-Replenishment option for your desired product on the product
            page, select your preferred delivery frequency, and then check out
            as normal.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            WHAT WILL HAPPEN AFTER I JOIN AUTO-REPLENISHMENT?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            After you join Auto-Replenishment, you will receive an email
            confirming your subscription. This email will include a link to
            access your Auto-Replenishment where you can manage your future
            orders, subscription items and subscription account information.
            <br />
            We will place your Auto-Replenishment orders automatically according
            to your selected frequency, and you will only be billed on the day
            the order is shipped. Please note that your packing invoice may
            reflect the full price of the item(s) ordered, but rest assured that
            your discount has been applied and your credit card will be charged
            appropriately.
            <br />
            Prior to each Auto-Replenishment order, we will send you an email
            reminder. You will also receive email notifications regarding other
            important information related to your Auto-Replenishment account,
            such as if your product is discontinued, if you cancel your
            subscription, or confirmation when an order is placed successfully.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            HOW DO I MAKE CHANGES TO MY AUTO-REPLENISHMENT DELIVERIES?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Once you have subscribed, Auto-Replenishment is easy to manage. You
            can change your next order date, skip an order, change your selected
            frequency, or cancel a subscription by visiting Manage Subscriptions
            located in the Account section. Please allow up to 24 hours for
            modifications or cancellations to be processed.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            HOW DO I MAKE CHANGES TO MY AUTO-REPLENISHMENT ACCOUNT INFORMATION?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            To review or modify your Auto-Replenishment account information,
            visit Manage Subscriptions located within the Account section on our
            site. You can change your shipping address or payment information
            for an individual order or at the subscription item level.
          </p>
        </details>

        <h2 class="sinfo">
          <u>PROMOTIONS</u>
        </h2>

        <details class="collapse1">
          <summary class="title1">WHERE CAN I FIND ACTIVE PROMOTIONS?</summary>
          <hr class="divider1" />
          <p class="description1">
            You can find our current promotions on our Exclusives page and other
            third party websites.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">HOW DO I ENTER A PROMO CODE?</summary>
          <hr class="divider1" />
          <p class="description1">
            To apply a promotional code to your order, please enter your code
            into the discount code field at checkout and click apply.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            I FORGOT TO ENTER A PROMO CODE ON MY RECENT ORDER, CAN I APPLY IT
            NOW?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Unfortunately, we are unable to add a discount to an order after
            it’s been placed. Please contact us at info@canagoldbeauty.com to
            apply the promo code to your order.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">ARE THERE LIMITS TO PROMO CODES?</summary>
          <hr class="divider1" />
          <p class="description1">
            Only one promotional code per order is allowed.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">DOES CANA GOLD OFFER FREE SAMPLES?</summary>
          <hr class="divider1" />
          <p class="description1">Not Yet.</p>
        </details>

        <details class="collapse1">
          <summary class="title1">DO YOU OFFER GIFT CARDS?</summary>
          <hr class="divider1" />
          <p class="description1">We currently offer e-gift Cards.</p>
        </details>

        <details class="collapse1">
          <summary class="title1">DO YOU OFFER STUDENT DISCOUNTS?</summary>
          <hr class="divider1" />
          <p class="description1">
            Enjoy 15% off all orders with your student discount at Cana Gold
            Beauty with Student Beans. Learn more
          </p>
        </details>

        <h2 class="sinfo">
          <u>GIFT CARDS</u>
        </h2>

        <details class="collapse1">
          <summary class="title1">
            CAN A GIFT CARD BE USED MORE THAN ONCE?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Yes, provided there is still a balance remaining on your gift card.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            CAN MORE THAN ONE GIFT CARDS BE USED TOWARDS A PURCHASE?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Yes, you can redeem another gift card during checkout.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">HOW DO I CHECK MY BALANCE?</summary>
          <hr class="divider1" />
          <p class="description1">
            If a gift card is associated with your Cana Gold Beauty customer
            account, then you can check the balance by using the link provided
            in the gift card email. If you don’t have a Cana GoldBeauty customer
            account, you can contact info@CanaGoldbeauty.com and they will
            provide the information for you.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            CAN A GIFT CARD BE USED TO PAY FOR SHIPPING AND TAXES?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            No, you can’t use a gift card to buy another gift card.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            CAN I APPLY A DISCOUNT CODE TO MY GIFT CARD PURCHASE?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Yes, gift cards are applied to the final order total which includes
            shipping and taxes.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            WHAT MAKES CANA GOLD PRODUCTS LEADER, DIFFERENT AND BETTER THAN
            OTHER SKIN CARE AND HEALTH PRODUCTS?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Cana Gold Beauty uses high standards for every one of our products
            and we work hard to perfect “just in time” manufacturing so there
            are fresh products on the shelves at all times.
            <br />
            Here at Cana Gold, we put our heart into providing the customer with
            the best quality because we know you deserve the best. We care about
            your satisfaction and your well being, which is why we have searched
            the globe to get the best in your hands. Our ingredients are
            clinically studied and proven to achieve the results we claim to
            give. This combination of ingredients creates the one and the only
            one product that you will need to use for all your life.
            <br />
            We are not like other product manufacturers that choose one or two
            effective ingredients, then try to come up with a new line every 6
            months or year to get the customer to spend more money, while not
            giving the benefits that is noticeable in short time. That makes the
            customer puzzled and lost and wants to try something new because
            he/she couldn’t achieve the desired result.
            <br />
            At Cana Gold, we combine an array of the best luxury and natural
            ingredients.
            <br />
            A lot of expert efforts have been put into the all aspects of this
            product. The combination of all these ingredients is a very special
            blend that benefit you skin, senses and soul. All your senses will
            be active at once with the aromatherapy of the essential oils and
            the soothing rose water, which is more gentle on the skin than the
            water that is used in the average skin product. This is all wrapped
            up in packaging that was made to be adored and proudly shown off.
            <br />
            We are a leader in our industry and promise our customers
            consistency, improvements and a continued creation of Nature meet
            Science to ensure you are given the best of both.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            WHAT ARE THE BENEFITS OF THE INGREDIENTS USED IN CANA GOLD BEAUTY
            PRODUCTS?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Cana Gold beauty has two basic lines:
            <br />
            The first line is rich with luxury ingredients that came from
            nature, but clinically has been developed to fit our routine life
            and extract the most benefits of it to rejuvenate the skin and give
            you younger look instantly like the 24K gold, Caviar, Cocoa extract,
            Green tea, Jasmine oil and DMEA. All these ingredients are
            clinically prove to be essential in delaying the process of aging
            and making the clock go backward for your skin to make you look at
            least 5 years younger.
            <br />
            The second line is more for people who are simple, down-to-earth and
            like the products that talk directly to their soul; clean, organic,
            natural and effective. Our special blend skin cocktail is a secret
            formula the best plastic surgeons have been using on Hollywood
            celebrities for year. Cana Gold got a hold of these researches by
            pairing up with a group of top doctors who have worked for over 30
            years to create the best formula. This is the only formula you are
            going to need in your life to boost your skin, hair and give you
            over all beauty that shine from inside to outside.
            <br />
            Cana Gold Beauty uses over 30 botanical organic juice concentrates
            as our base, not water (we always wonder – why are people paying for
            products that contain 95% water when you can get this from your
            tap?). Botanical organic juices are rich in potent antioxidants,
            essential vitamins, vital phytonutrients, powerful hydroxy acids and
            also help with the penetration of our other active age defying
            ingredients.
            <br />
            Antioxidants help prevent the visible signs of aging by fighting
            free radical damage, thus bringing back the skin’s natural radiance.
            Higher antioxidant benefits have been found in organic fruit juice,
            the key ingredient in Cana Gold Beauty. Cana Gold Beauty combines
            organic botanical juices with age-defying antioxidants,
            performance-oriented peptides, refining hydroxy acids, essential
            vitamins and nutrients, rich organic shea, jojoba and olive oils,
            rose water, jasmine oil, sesame oil, green tea, seaweed, cocoa
            extract, almond oil, along with 11 kinds of exotic butters and
            essential oil that is needed for radiant skin , face and hair.
            <br />
            Cana Gold Beauty products are pH balanced and formulated for even
            the most sensitive skin.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">ARE YOUR PRODUCTS GLUTEN-FREE?</summary>
          <hr class="divider1" />
          <p class="description1">
            Cana Gold Beauty’s skincare are formulated without gluten.
            Additionally, Cana Gold Beauty’s manufacturing lines follow a strict
            sanitization and cleaning protocol between production runs. Note
            that the manufacturing plant may process gluten.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">WHO CERTIFIES YOUR INGREDIENTS?</summary>
          <hr class="divider1" />
          <p class="description1">
            Rest assured that all Cana Gold Beauty’s ingredients are certified
            by a United States Department of Agriculture (USDA) approved agency.
            We source all of our ingredients (including our juices, Aloe Vera,
            Honey, Botanicals, Plant oils, Sugar and Essential fatty acids)
            directly from USDA approved certified organic farms. We hold organic
            certificates from the state in which each organic ingredient is
            grown, including CCOF (California Certified Organic Farmers), Oregon
            Tilth, Quality Assurance International and Washington Department of
            Agriculture.
          </p>
        </details>

        <h2 class="sinfo">
          <u>INGREDIENTS</u>
        </h2>

        <details class="collapse1">
          <summary class="title1">RESULTS</summary>
          <hr class="divider1" />
          <p class="description1">
            I’m seeing AMAZING results with my skin, better tone and texture.
            What do you think is the “secret” ingredient that is causing this
            terrific action?
            <br />
            The amazing results are from a combination of our antioxidant packed
            100% certified botanical juice base, potent vitamins and fruit
            acids. Each Juice Beauty collection has powerful ingredients
            specifically surrounding the specific needs for that collection.
            <br />
            I heard that Cana Gold Beauty has the highest Vitamin C content in
            skincare. What is the exact percentage and explanation for this?
            <br />
            Since Cana Gold Beauty products start with botanical juice base and
            rose water and jasmine oil, instead of a tap water base or a
            petroleum base like most beauty products, we have a high Vitamins
            content in our products.
            <br />
            Vitamin C is available in both water-soluble and fat-soluble forms.
            Juice Beauty formulas can include both forms of Vitamin C for
            optimum results.
            <br />
            Cana Gold includes juices that are rich in water-soluble Vitamin C.
            In addition, our botanical juice base is among our highest
            percentage ingredient in our formulas and is listed first and thus
            our products are packed with potent Vitamin C.
            <br />
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            WILL CANA GOLD BASED PRODUCTS FEEL STICKY ON MY SKIN?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Cana Gold Beauty enriches our products with essential fatty acids
            and other ingredients such as rich organic aloe, jojoba, and Shea
            that make the products smooth and luxurious. All of our products are
            extremely concentrated, so a bit goes a long way!
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            WHY DOES CANA GOLD AVOID HARSH PARABEN PRESERVATIVES?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Parabens are synthetic preservatives that are commonly used in
            beauty products. Several researchers reported that parabens were
            found within human breast tumors. Cana Gold Beauty was one of the
            first companies to be completely Paraben free.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">WHAT INGREDIENTS SHOULD I AVOID?</summary>
          <hr class="divider1" />
          <p class="description1">
            Parabens, propylene or butylene glycols, petroleum, sulphates, PEGs,
            TEA, DEA, phthalates, GMO, silicones, pesticides, artificial dyes or
            synthetic fragrances. One way to avoid pesticides in beauty products
            is to buy certified organic products with the USDA seal or the
            Certified Organic Seal on the front of the box or product.
            <br />
            I’ve heard that there is quite a bit of research on the potential
            effects of all these unnecessary chemicals and additives in beauty
            products. Where can I find more information?
            <br />
            Some cosmetic companies are not in the business of health or
            environment; they are in the business of beauty. Beauty products in
            the United States are largely unregulated with the exception of two
            areas: SPF values Organic labeling in the State of California
            <br />
            The epidermis, the top most layer of skin, is only 0.1 to 1.5
            millimeters thick. It is made up of five layers: the basal cell
            layer, the squamous cell layer, the stratum granulosum, the stratum
            lucidum, and the stratum corneum. Working together, these layers
            continually rebuild the surface of the skin from within, maintaining
            the skin’s strength and helping to thwart normal wear and tear and
            sun damage.
            <br />
            The stratum corneum is the outermost, visible layer of the
            epidermis. The stratum corneum is made up of 10 to 30 thin layers of
            dead cells. The thickness varies depending on health, age, and
            location on the body. The stratum corneum is protected by a thin
            layer (approximately 5 cells thick), the acid mantle, made up of
            water (perspiration) and oil (sebum).
            <br />
            As the outermost cells give way to wear and tear, they are replaced
            from within by new layers of strong, long-wearing cells. In the
            average adult, it takes nearly a month for the stratum corneum to be
            completely replaced. The replacement process generally slows with
            age.
            <br />
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            HOW LONG IS YOUR SHELF LIFE, AND WHAT DO YOU PRESERVE WITH?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Cana Gold Beauty recommends to use most of our products within 1
            year after opening, and within 6 to 8 months after opening for our
            eye products. Sunscreens may be used within 2 years after opening.
            <br />
            Your safety is our first concern and as a result, Cana Gold has
            worked diligently to find safe preservatives that provide effective
            protection up to 3 years for products never opened.
            <br />
            Cana Gold Beauty’s Skincare products are preserved with a
            combination of safe and effective food grade preservatives that
            include ethylhexylglycerin, sodium benzoate and potassium sorbate.
            Our USDA products are preserved with organic grape alcohol. Some of
            our original formulations are preserved with Sage derived
            phenoxyethanol. These preservatives are safe, effective, naturally
            derived alcohols that are used at percentages less the 0.3%.
            <br />
            Rest assured that health and safety is a top priority at Cana Gold ,
            which is why we have successfully replaced toxic paraben
            preservatives with safe and effective alternatives.
          </p>
        </details>

        <details class="collapse1">
          <summary class="title1">
            I AM UNSURE OF WHAT MY SKIN NEEDS, ARE THERE ANY CONSULTATION
            SERVICES?
          </summary>
          <hr class="divider1" />
          <p class="description1">
            Yes, you can email our Customer Care estheticians to receive a free
            skincare consultation at info@canagoldbeauty.com. Please note, we do
            not provide medical advice of any kind, only recommendations of
            products to choose within our skincare collections.
          </p>
        </details>
      </div>
      </Container>
    </div>
  );
};

export default Faq;
