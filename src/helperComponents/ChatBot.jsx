import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Bot, Sparkles } from 'lucide-react';
import '../styles/ChatBot.css';
import { categories, suggestedQuestions, defaultMessage, unAvailableCategory } from "../constants/constants.jsx";

const ChatBot = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            content: defaultMessage,
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasUserInteracted, setHasUserInteracted] = useState(false);
    const messagesEndRef = useRef(null);

    const getResponse = (userInput) => {
        const input = userInput.toLowerCase();
        for (const category of categories) {
            if (category.keywords.some(keyword => input.includes(keyword))) {
                return category.response;
            }
        }
        return unAvailableCategory
    };

    const handleSend = async () => {
        if (!input.trim()) return;
        setHasUserInteracted(true);

        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: input,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                type: 'bot',
                content: getResponse(input),
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    const handleSuggestionClick = (question) => {
        setInput(question);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (hasUserInteracted) {
            scrollToBottom();
        }
    }, [messages, hasUserInteracted]);

    return (
        <div className="chatbot-container">
            <div className="chatbot-wrapper">
                {/* Header */}
                <div className="chatbot-header">
                    <div className="chatbot-header-content">
                        <div className="chatbot-avatar bot-avatar">
                            <Bot className="chatbot-icon" />
                        </div>
                        <div className="chatbot-info">
                            <h3 className="chatbot-title">Ask About Varun</h3>
                            <p className="chatbot-subtitle">Galactic Support • Satellite connected</p>
                        </div>
                        <div className="chatbot-status">
                            <div className="status-indicator"></div>
                            <span className="status-text">Online</span>
                        </div>
                    </div>
                </div>

                {/* Chat Container */}
                <div className="chatbot-messages">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`message-container ${message.type === 'user' ? 'user-message' : 'bot-message'}`}
                        >
                            <div className="message-content">
                                <div className={`message-avatar ${message.type === 'user' ? 'user-avatar' : 'bot-avatar'}`}>
                                    {message.type === 'user' ? (
                                        <User className="chatbot-icon" />
                                    ) : (
                                        <Sparkles className="chatbot-icon" />
                                    )}
                                </div>
                                <div className={`message-bubble ${message.type === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                                    <p className="message-text">{message.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="message-container bot-message">
                            <div className="message-content">
                                <div className="message-avatar bot-avatar">
                                    <Sparkles className="chatbot-icon" />
                                </div>
                                <div className="message-bubble bot-bubble">
                                    <div className="typing-indicator">
                                        <div className="typing-dot"></div>
                                        <div className="typing-dot"></div>
                                        <div className="typing-dot"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Suggested Questions */}
                <div className="chatbot-suggestions">
                    <div className="suggestions-container">
                        {suggestedQuestions.slice(0, 2).map((question, index) => (
                            <button
                                key={index}
                                onClick={() => handleSuggestionClick(question)}
                                className="suggestion-button"
                            >
                                {question}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Input Area */}
                <div className="chatbot-input">
                    <div className="input-container">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    handleSend();
                                }
                            }}
                            placeholder="Ask me anything about Varun..."
                            className="chat-input"
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim()}
                            className="send-button"
                        >
                            <Send className="send-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;