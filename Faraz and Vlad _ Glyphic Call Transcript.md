Faraz Saifullah 0026 

Hello? 

V Vlad Ursul 0031 

Oh, I muted. Hey. Hey there. How are you? 

F Faraz Saifullah 0035 

Hey, how are you lad? 

V Vlad Ursul 0037 

I'm good, I'm good. Yeah, sorry we'll be without camera today. I'm traveling and don't have my usual setup. So. Yeah, feel free to turn off yours if you want. My name is Vlad. I'm leading customer experience integration app. So the goal for the call today is for me to show you the product, basically like how integration app looks like, how it works. So you can ask questions you have about the product, we can talk a little bit about it and then we will discuss the test assignment which is like take home assignment, you're going to have a few days to make it done. And the goal of test assignment is for you to basically try out the product. Understand like if you would like to work with us and for us to see, to see how well you can work with this. Right. So that's basically the agenda that we usually do. If you have any questions like about the company position, whatever or any other questions, feel free to ask them. You can ask them now or in. Then just let me know if there is anything else you'd like to discuss and then we can get started from there. 

F Faraz Saifullah 019 

Great, we can start. Okay, cool. 

V Vlad Ursul 015 

Just give me one sec. I will share my screen and I will give you an overview of the platform. 

F Faraz Saifullah 0202 

Okay, So I will be writing down a few things like while you show me this. Right? 

V Vlad Ursul 0211 

Okay, sure, sure, no problem. Also, in the end of the call I will share with you the call recording so you can get it and refer to it. Let's say when you think test assignment or something. 

F Faraz Saifullah 0223 

That's perfect. 

V Vlad Ursul 0225 

Cool. This is the integration of platform, the one that you see now on the screen. The portal is built for dev teams, developers who build SaaS applications. For purpose of this call, let's imagine that you're building SaaS application which is a call recorder for businesses. Like you see here is integration up assistant on this call, right. So let's say you're building an app which is recording the sales meetings and then sending something to the CRM or whatever tool it is, right? And therefore let's say you would like to have a lot of integrations inside your app so your customers could come connect their CRM, 

whatever, right? And then they can see the data in their stack that they use during their work. Right? So keep this in context in mind and then I will give you a demo, imagine your potential customer or whatever so you can understand how the platform works and what are the typical use cases that people solve with this first step when you're inside is you select with what apps you like to be integrated. We have a bunch of tools pre built. Technically you can integrate with anything that has an API but we will select something we prepare just for simplicity. I've selected top five CRMs and then let's say after the call is recorded you would like to the transcribe that you do to be sent to the customer CRM how you can make it work? We have something we call integration use cases. There is a lot of prebuilt scenarios that people can use but we'll build one from scratch. Let's go to integration builder. Let's create a new scenario. Let's call it Sync call recordings 

Recordings for example. We're creating it from scratch and then we can start adding stuff to this scenario. There is two main elements that you can create and run. One of them are actions and second is flows. Actions Basically the purpose of action is to make a simple one step action. Create a task, get list of users. Basically you make a request, you got a response right away. So the purpose of flows is for multi step based logic. So flows are also asynchronous, they're running in the queue and then you can use them for this use case that we have. Let's create a simple flow. Idea here is that when you're creating a flow you can create it for a specific app or you can create a universal flow. Basically describe a product logic that you like to replicate across category of apps and then make it work with multiple vim. Let's create a flow, let's call it send transcript to CRM. Here you can define, if you open the flow you can start defining how you would like it to work. First of all let's say we would like it to run. We are an API trigger. We'll provide let's say an email of a person we talk with and transcript. Right. Let's keep it simple for the demo purpose. Then what we would like to do next is probably something like we want to look up for a contact link in the CRM by email and then create a node attached to this contact. I added a node called lookupdate record and you see this is pretty generic lookupdate record, super generic. The reason here is that you can select a data model that you would like it to work with. So let's say we would like to work with contacts and I'll select the dead molecontacts. Then you're going to see some fields that we know. Usually you can search contacts by for example primary email. I will set up a filter by this and then you can set up a fill mapping what data you would like to get when you're searching for it. In our case default data let's say or standard schema is enough because we just need an id. So I will leave it as this. Then I will add just like let's say two links, let's say if found and then the second one, let me call it not found. Right? And I will let's just some condition here. 

F Faraz Saifullah 063 

Sorry to interrupt. The contact thing that you defined above, right? It's generic, it's irrespective of the underlying tool that we are going to use, right? Correct. 

V Vlad Ursul 0653 

So here we're describing universal flow, right? So it's constructed away of any 

application. It just our data models like the most common ones we know that appear in different applications. 

F Faraz Saifullah 0706 

Okay. This is intersection of whatever tools that we have. Just one quick question here. What if some integration this will not apply in this particular situation. But what if some integration does not support this contact model? So do we not supported in the universal flow? 

V Vlad Ursul 0731 

That's a good question. So let me show it to you. So let's say we would like this flow to work with Google Sheet, right? Google Sheet. They don't have context technically, but you may want to make it work with the Google Sheet because you would like to send that run scripts to your spreadsheet, right? Or whatever and then I will come to it. That's actually a good question. Just give me one sec. So here I'm going to back to integration builder flows. I'm opening our flow, right? So here is a flow. We build API trigger check for contact if found. Let's say we would like to create a data record. And here again we're selecting a generic like object that we would like to create. Let's say we'd like to add a note, right? And then we're saying that let's say not title should be something like email demo. Call the content, we will put our transcript and then contact ID we will get from the lookup. That's it. This is pretty much working logic run with an API search for contact, create a node we can extend but for simplicity doesn't matter what is the next step. Next step is to make this work with real applications. For this we click add apps on top and we select with what applications we would like it to work with. Then we click generate flows. What's happening is we've taken this template and we generate the same one for each of Those apps. Now if you click on top here, e.g. pipedrive, you would see same flow, but only for pipedref. For example, if I open the lookup here, you're going to see it's no longer working with contacts, but it works with purple persons because that is a real object on the pybref. Also you see the lookup changed. Also if I go, let's say to create our 

recording, you see the mapping change because this is a real field for my pipe. Same if I go to a salesforce I'm going to see a different thing. We create a note and then title and body in here. For example, in HubSpot is also should be different, et cetera. But going back to a question, what happened if something is not there? Let's say Google s\*\*\*, you see the same flow but your lookup is obviously empty because we don't know what to use. Then you can go and customize it. Let's say we would like to search for a s\*\*\* rows and then a customer need to provide spreadsheet ID and tab id, but you are a developer customer of yours need to provide it, so you cannot do it here. For this we have a user UI that you can embed inside your app where they can basically additionally configure the thing. But this is something more advanced that I would like to we can skip now. But ideally how it works is you're embedding UI to your app where you can go and customize stuff. Your end user can go and customize and they could select okay in Google Sheets by contacts. We're going to mean that spreadsheet, let's say by notes we would like to put it in another spreadsheet. That's going to be an idea. Idea behind all of this universal stuff is that you build a flow once you scale it across multiple integrations and then your code stays the same, doesn't matter what app it is. So you abstract the logic inside here and then if you need to add the new application, just click add up. And maybe you additionally do some configurations like we did here with Google Sheets. But then it's still the same code for you. That's mainly how you build stuff. I'm curious what questions you have and then I'm happy to dive deeper in other areas and also show how end user UI may look like. 

Faraz Saifullah 1126 

Till this part I think I have two questions. Yeah, One is how do we take care of the mappings here? Like is it a config based manual thing that we as a developers are going to do or is it handled by AI? The second question is how do we do error handling in this universal thing? Like a lot of different tools may have different kinds of error handling. Right? So how do we, how do we deal with that? 

V Vlad Ursul 1158 

Yeah, so first question, the fill mappings, right? So when you build universal flow, sorry, you set up a fill mapping once, right? You set up a field mapping once and then we apply it to a lot of apps, right? So this fields in here and the ones that you can set up on each app level, those flow that we know usually exist on application. So they're like standard. There is no AI when you apply it in there, but there is AI when we build those mappings. What I mean by this for example here is I open the list of apps. If I go to my pipedrive, if I go to a connector, I could see how a pipedraf is implemented. Here is list of objects we have in a pipedrive. This is for example, let's say a default schema for leads. There is a universal data model that is saying that contacts is mapped to leads and persons in a pipedref and that's how default mapping is done. While we're building a connectors, we're using AI to do this mappings as well. But let's say once you predefined those configurations, there is no need to use AI anymore. 

F Faraz Saifullah 1311 

Yeah, that's correct. 

V Vlad Ursul 131 

That's the main point. We use a lot of YA when we build connectors. But when you're here it's pretty much straightforward. You set up your default thing and then if you don't like how it works, you can go and change it. But that's pretty much an idea. Okay, all right. Okay then regarding error handling. So error handling again, it highly depends on what errors are we talking about right now. I will switch to my workspace just to give you an idea what we have what you can see. So for example we have an activity log where you can see let's say all the flow runs, which ones have failed, which was not completed. You can go and open, you could see the whole log. Let's say here filter goes through, you can go to log, you can see why, et cetera. If there is different API requests, you would see them. If you're getting an error from a third party application, we'll return the same error in here or maybe somewhere in the let's say in the web hook logs. Again, depends what you're using. There is a lot of options here and that's the main idea. Let's say we wouldn't unify errors. We will return the same thing that is being returned from an application. Because it's impossible to unify all the errors basically. 

F Faraz Saifullah 125 

Exactly. Because debugging will be difficult if you unify it. Customer needs to know exactly what the error happened to identify and fix the issue. Okay, it makes sense. Okay, cool. 

V Vlad Ursul 11 

That's how you build stuff. Then once a customer is set up, let's say scenario, they set up application they would like it to work with. What they do next is they basically connect it to their app. They install either React or JavaScript SDK. Then they can add some UI to their end. Let's say the simplest version is the ntegration app open and it shows the list of apps. And then their end user can go and connect an application right inside their app. Then they generate a token basically to open this ui, et cetera. That's pretty much an idea. Then what they end up with is something like that. Let me open you. We have a showcase in here for example. I'll open one of our PCs. So imagine this is an application that you're building. You can have integration space somewhere. You see this is fully available ui. You can go, you can connect something and then there is a lot of 

configuration in the hood. But ideas again under the hood there is like all everywhere flows, directions which you can run and edit. Is there any other questions about the platform, about how build stuff, how it works? 

F Faraz Saifullah 155 

A little bit technical side, I was wondering how like what's the main identifier for the customer in the database and how the like, what database are you using to manage it? I understand there's a little bit of nesting because the integration app platform will have each customer, maybe let's say an org and each of those orgs will have like a lot of connections and each of those connections will have a lot of different customers for those customers of ours. Is all of that in our DB only or how are we managing that? Different tables for different orgs. 

V Vlad Ursul 1637 

We have a concept of organization. It's basically, let's say you are building an app and you're our customer and you will have an organization. Integration app in every 

organization can have multiple workspaces. Basically we treat them as environments. Then in every workspace we have an entity of a customer and this is basically end user of application that our customer is building. Then they put here whatever they want. They just put their internal IDs, their internal names, the same that they have in their db. And then we'll store them with Relation to that specific customers. We also have each of those customers could have their own connection, their own actions, their own flows. Like you're describing here, a template and when you enable it for the end user for a 

customer, we create a copy of it for every customer. If that makes sense. 

F Faraz Saifullah 1736 

Okay, yeah, makes sense. Yes. 

V Vlad Ursul 1739 

Another it's multi tenant approach and also just to add, since you asked me technical questions, everything you build here is yamls. So every flow that we built today, just like a YAML code and you can easily, let's say store in persistent storage in a GitHub your code of your integrations and then ship it across workspaces dynamically within your CI CD practice. 

F Faraz Saifullah 1805 

Okay, makes sense. 

Vlad Ursul 1807 

Okay, yeah. So that is the main idea about the product. Now let's discuss the test assignment. Just give me one moment. I will open a test text for it so I can give you an idea and then we can go from there. Cool. So here we are. The test task is super simple. You need to create an application that creates a contact in integrated CRM. So the usage scenario is let's say I'm opening a page, I see something like this, I see a list of 

integrations, I go connect an integration. Then I'm as a customer, I see the where is my notion? It lost it. I see the form, right? The form should have full name, email, phone, company name and pronouns. This is important to have all the fields available in there. There is some tricky logic behind the pronouns. Just putting your attention to it. Also a company name, you need to see how it usually works and understand handle the corner cases. Then the user fills this form, click Create Contact and then you show some loader the contact is getting created in the CRM that they have connected before. Then you display a link for the created contact on the app. Okay, that's pretty much it. So regarding implementation, this should work with at least two apps. We recommend apps put in Pipedry because like five minutes to get a trial account in there you need to use our React SDK for the front end and basically integration app in general. So let's say I will have access you to this account, right? You will build necessary flows to Send context to CRM etc. You can follow the getting started. That will show you how to do the stuff. Generally we recommend using Next JS for the whole app because it has both backend and front end and it's super simple to set up. You can use any AI tooling. In the meantime it's going to be even better if you're going to build it with the AI. That's pretty much it. Any questions on what need to be done before I go to tell you how we'll evaluate it? 

F Faraz Saifullah 20 

This is going to be a standalone app or is this going to be on top of the integration app? Basically what I'm trying to understand is in this scenario, will I be a SaaS customer of yours who is trying to create flows and connect with the integration app, or am I going to create a kind of a limited replica of integration app itself? 

V Vlad Ursul 2120 

No, you're going to be a customer. So essentially what this task is about, right? So we're getting people who'd like to use a product and we're running a PVC with them. Right. So the role that we're talking about now, it includes building prototypes for a customer. So imagine you work in an integration app and you're a solution engineer, right? And then customer comes to us and say, hey, this is my product use case. That's what I need to have and that's how it should work. Obviously this is a simple version of it, et cetera. Right. But this is like a type of task that you will be facing if everything goes well during the hiring process. Right? 

F Faraz Saifullah 2206 

Okay. 

V Vlad Ursul 2209 

Your goal is to build a prototype for a customer to show how to make their scenario work. You're putting yourself into the head of other customer and you're trying to implement 

this scenario. Connect, application, fill the form, click button. You will see the conduct read in the CRM. 

F Faraz Saifullah 2231 

Right. 

V Vlad Ursul 2232 

That's also important because that's how we're going to evaluate it. Let's say we'll check your code. How clean is it, how smart the decisions in the code, how well you handled errors, corner cases, it's all up to you. We don't give you any specific requirement to this, but we just want to see how you're thinking about this use case process, et cetera. Then during your submission, what we expect to see is a source code, a short, maybe like one minute video of you explaining how to use it, what decisions were made, how it works. Again, imagine you're recording it for the customer because that's also something that we do usually. Then maybe if you have time or if it's easy for you, just live version where we can play around with the source code. I know if you're using next js, you just spin it up on Vercell, should be like again, few minutes to do and then that's it. Okay. 

F Faraz Saifullah 2330 

And while doing kind of a discovery or and finalizing the approach is this is there room for collaboration? Like can I ask you questions, Can I ask you for like clarifying questions and all? 

V Vlad Ursul 238 

Yeah, yeah, yeah. We obviously, obviously would prefer if you do it on your own. If you do like take a risk and make your own assumptions. But if you, if you need some help or like you have some questions like this, let's say imported on the task, feel free to send us an email and I will reply usually pretty fast. 

F Faraz Saifullah 210 

Okay, how much time will I have for this? Yeah, how much time do you guys take for like when a customer comes to you with this scenario? 

V Vlad Ursul 22 

Yeah, usually how it works is we try to ship prototypes. We also have a lot of prototypes pre built. Let's say if customer comes to us and we build a prototype for them, we try to ship it in two or three days max because there might be some connector changes, et cetera for this task. It shouldn't take a lot of time to build because it's pretty 

straightforward and simple. There's no you know, complex logic behind it. But we usually give a week to do it. So I know like you can, you can have a different timelines, you know, maybe regular current job or whatever, some plans, whatever. So just tell me how your schedule works, when do you gonna work on it and as I said like yeah, usually if we talk today, I would expect to get it by Friday. But like if you want to, if you need more time or if you say you can do it faster, it all works. Just set an expectation how you think it's going to be. 

F Faraz Saifullah 2525 

Okay, makes sense. I will just spend some time understanding the whole thing and then I can give you some estimate of the time. Okay. 

V Vlad Ursul 2536 

Okay, yeah, that works. Cool, cool. 

F Faraz Saifullah 251 

Will you be sending credentials for me to use integration app? 

V Vlad Ursul 256 

Yeah, so a few things. I will send you this task description. I will also send you access to the account that I was showing you to you today. The one where we built a sample flow, basically your account now and then the call recording of course. And with this it should be enough, right to build this stuff. 

F Faraz Saifullah 2615 

Okay, makes sense. Okay, cool. 

V Vlad Ursul 2619 

Yeah, I think that's it from my end. Just let me know if there is any questions from your side or if there's anything you would like to discuss or ask as well. 

F Faraz Saifullah 2630 

I think I'm sorted for now. I will spend some time understanding like going over the platform once again and understanding the problem statement. And then if I have something, I'll shoot you an email. 

V Vlad Ursul 266 

Okay, sure, sounds good. 

F Faraz Saifullah 269 

Okay, thanks a lot. Cool. 

V Vlad Ursul 2651 

Thank you for this meeting and thanks for questions. You ask good questions. I like it. So, hope to see your submission soon. See you. 

F Faraz Saifullah 2701 

Yeah. Have a nice day. You too. 

V Vlad Ursul 270 

Bye.